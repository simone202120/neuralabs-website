-- ============================================
-- NEURALABS WEBSITE - Initial Database Schema
-- ============================================
-- Run this in Supabase SQL Editor or as a migration
-- https://supabase.com/dashboard/project/YOUR_PROJECT/sql

-- --------------------------------------------
-- CONTACTS TABLE
-- Stores all contact form submissions and leads
-- --------------------------------------------
CREATE TABLE IF NOT EXISTS contacts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    
    -- Contact info
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    company VARCHAR(255),
    phone VARCHAR(50),
    
    -- Project details
    project_type VARCHAR(50),
    message TEXT,
    budget_range VARCHAR(50),
    timeline VARCHAR(50),
    
    -- Tracking
    source VARCHAR(100) DEFAULT 'form',
    status VARCHAR(50) DEFAULT 'new',
    notes TEXT,
    
    -- UTM tracking
    utm_source VARCHAR(255),
    utm_medium VARCHAR(255),
    utm_campaign VARCHAR(255),
    referrer TEXT
);

-- Indexes for contacts
CREATE INDEX IF NOT EXISTS idx_contacts_status ON contacts(status);
CREATE INDEX IF NOT EXISTS idx_contacts_created ON contacts(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contacts_email ON contacts(email);

-- Comments
COMMENT ON TABLE contacts IS 'Stores all contact form submissions and leads';
COMMENT ON COLUMN contacts.project_type IS 'website, webapp, ai_agent, rag, automation, other';
COMMENT ON COLUMN contacts.source IS 'form, calculator, chat';
COMMENT ON COLUMN contacts.status IS 'new, contacted, qualified, proposal, won, lost';

-- --------------------------------------------
-- ESTIMATES TABLE
-- Stores calculator-generated estimates
-- --------------------------------------------
CREATE TABLE IF NOT EXISTS estimates (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    
    -- Link to contact (optional - estimate can be anonymous)
    contact_id UUID REFERENCES contacts(id) ON DELETE SET NULL,
    
    -- Calculator inputs
    project_type VARCHAR(50) NOT NULL,
    complexity VARCHAR(50) NOT NULL,
    features JSONB DEFAULT '[]'::jsonb,
    timeline VARCHAR(50),
    
    -- Calculator outputs
    hours_estimate_min INT,
    hours_estimate_max INT,
    price_estimate_min DECIMAL(10,2),
    price_estimate_max DECIMAL(10,2),
    
    -- Follow-up
    requested_detailed BOOLEAN DEFAULT FALSE,
    detailed_sent_at TIMESTAMPTZ
);

-- Indexes for estimates
CREATE INDEX IF NOT EXISTS idx_estimates_contact ON estimates(contact_id);
CREATE INDEX IF NOT EXISTS idx_estimates_created ON estimates(created_at DESC);

-- Comments
COMMENT ON TABLE estimates IS 'Stores calculator-generated project estimates';
COMMENT ON COLUMN estimates.complexity IS 'simple, medium, complex';
COMMENT ON COLUMN estimates.features IS 'JSON array of selected features, e.g. ["auth", "dashboard", "ai_integration"]';
COMMENT ON COLUMN estimates.timeline IS 'rush, standard, flexible';

-- --------------------------------------------
-- CHAT_LOGS TABLE
-- Stores AI chat conversations for analytics
-- --------------------------------------------
CREATE TABLE IF NOT EXISTS chat_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    
    -- Session tracking
    session_id VARCHAR(255) NOT NULL,
    contact_id UUID REFERENCES contacts(id) ON DELETE SET NULL,
    
    -- Message content
    role VARCHAR(20) NOT NULL,
    content TEXT NOT NULL,
    
    -- Analytics metadata
    intent_detected VARCHAR(100),
    sentiment VARCHAR(50),
    converted_to_lead BOOLEAN DEFAULT FALSE
);

-- Indexes for chat_logs
CREATE INDEX IF NOT EXISTS idx_chat_session ON chat_logs(session_id);
CREATE INDEX IF NOT EXISTS idx_chat_created ON chat_logs(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_chat_contact ON chat_logs(contact_id);

-- Comments
COMMENT ON TABLE chat_logs IS 'Stores AI chat messages for analytics and history';
COMMENT ON COLUMN chat_logs.role IS 'user or assistant';
COMMENT ON COLUMN chat_logs.intent_detected IS 'Detected user intent: inquiry, pricing, support, etc.';

-- --------------------------------------------
-- NEWSLETTER_SUBSCRIBERS TABLE
-- Stores newsletter subscriptions
-- --------------------------------------------
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    
    -- Subscriber info
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255),
    
    -- Status
    status VARCHAR(50) DEFAULT 'active',
    source VARCHAR(100),
    
    -- Unsubscribe tracking
    unsubscribed_at TIMESTAMPTZ
);

-- Indexes for newsletter_subscribers
CREATE INDEX IF NOT EXISTS idx_newsletter_email ON newsletter_subscribers(email);
CREATE INDEX IF NOT EXISTS idx_newsletter_status ON newsletter_subscribers(status);

-- Comments
COMMENT ON TABLE newsletter_subscribers IS 'Newsletter subscription list';
COMMENT ON COLUMN newsletter_subscribers.status IS 'active, unsubscribed, bounced';

-- --------------------------------------------
-- ROW LEVEL SECURITY (RLS)
-- --------------------------------------------

-- Enable RLS on all tables
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE estimates ENABLE ROW LEVEL SECURITY;
ALTER TABLE chat_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- CONTACTS policies
-- Allow anonymous insert (for form submissions)
CREATE POLICY "Allow anonymous insert on contacts" ON contacts
    FOR INSERT 
    TO anon 
    WITH CHECK (true);

-- Allow authenticated users to read all
CREATE POLICY "Allow authenticated read on contacts" ON contacts
    FOR SELECT 
    TO authenticated 
    USING (true);

-- Allow authenticated users to update
CREATE POLICY "Allow authenticated update on contacts" ON contacts
    FOR UPDATE 
    TO authenticated 
    USING (true);

-- ESTIMATES policies
CREATE POLICY "Allow anonymous insert on estimates" ON estimates
    FOR INSERT 
    TO anon 
    WITH CHECK (true);

CREATE POLICY "Allow authenticated read on estimates" ON estimates
    FOR SELECT 
    TO authenticated 
    USING (true);

CREATE POLICY "Allow authenticated update on estimates" ON estimates
    FOR UPDATE 
    TO authenticated 
    USING (true);

-- CHAT_LOGS policies
CREATE POLICY "Allow anonymous insert on chat_logs" ON chat_logs
    FOR INSERT 
    TO anon 
    WITH CHECK (true);

CREATE POLICY "Allow authenticated read on chat_logs" ON chat_logs
    FOR SELECT 
    TO authenticated 
    USING (true);

-- NEWSLETTER_SUBSCRIBERS policies
CREATE POLICY "Allow anonymous insert on newsletter_subscribers" ON newsletter_subscribers
    FOR INSERT 
    TO anon 
    WITH CHECK (true);

CREATE POLICY "Allow authenticated read on newsletter_subscribers" ON newsletter_subscribers
    FOR SELECT 
    TO authenticated 
    USING (true);

CREATE POLICY "Allow authenticated update on newsletter_subscribers" ON newsletter_subscribers
    FOR UPDATE 
    TO authenticated 
    USING (true);

-- --------------------------------------------
-- FUNCTIONS & TRIGGERS
-- --------------------------------------------

-- Function to auto-update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger for contacts updated_at
CREATE TRIGGER update_contacts_updated_at
    BEFORE UPDATE ON contacts
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- --------------------------------------------
-- SAMPLE DATA (for development)
-- --------------------------------------------

-- Uncomment to insert sample data for testing
/*
INSERT INTO contacts (name, email, company, project_type, message, source, status)
VALUES 
    ('Mario Rossi', 'mario@example.com', 'TechStartup Srl', 'webapp', 'Vorrei sviluppare un MVP per la mia startup', 'form', 'new'),
    ('Laura Bianchi', 'laura@example.com', 'Bianchi & Co', 'automation', 'Cerco automazioni per il mio business', 'calculator', 'contacted');

INSERT INTO newsletter_subscribers (email, name, source)
VALUES 
    ('subscriber1@example.com', 'Test User 1', 'footer'),
    ('subscriber2@example.com', 'Test User 2', 'homepage');
*/

-- ============================================
-- END OF SCHEMA
-- ============================================
