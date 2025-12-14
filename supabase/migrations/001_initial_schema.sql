-- Create the contacts table
CREATE TABLE contacts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    
    -- Base info
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    company VARCHAR(255),
    phone VARCHAR(50),
    
    -- Request details
    project_type VARCHAR(50),
    message TEXT,
    budget_range VARCHAR(50),
    timeline VARCHAR(50),
    
    -- Tracking
    source VARCHAR(100) DEFAULT 'form',
    status VARCHAR(50) DEFAULT 'new',
    notes TEXT,
    
    -- UTM
    utm_source VARCHAR(255),
    utm_medium VARCHAR(255),
    utm_campaign VARCHAR(255),
    referrer TEXT
);

-- Indexes for contacts
CREATE INDEX idx_contacts_status ON contacts(status);
CREATE INDEX idx_contacts_created ON contacts(created_at DESC);
CREATE INDEX idx_contacts_email ON contacts(email);

-- Create the estimates table
CREATE TABLE estimates (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    
    contact_id UUID REFERENCES contacts(id),
    
    -- Calculator parameters
    project_type VARCHAR(50) NOT NULL,
    complexity VARCHAR(50) NOT NULL,
    features JSONB DEFAULT '[]',
    timeline VARCHAR(50),
    
    -- Calculation output
    hours_estimate_min INT,
    hours_estimate_max INT,
    price_estimate_min DECIMAL(10,2),
    price_estimate_max DECIMAL(10,2),
    
    -- Follow up
    requested_detailed BOOLEAN DEFAULT FALSE,
    detailed_sent_at TIMESTAMPTZ
);

-- Index for estimates
CREATE INDEX idx_estimates_contact ON estimates(contact_id);

-- Create the chat_logs table
CREATE TABLE chat_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    
    session_id VARCHAR(255) NOT NULL,
    contact_id UUID REFERENCES contacts(id),
    
    role VARCHAR(20) NOT NULL,
    content TEXT NOT NULL,
    
    -- Metadata
    intent_detected VARCHAR(100),
    converted_to_lead BOOLEAN DEFAULT FALSE
);

-- Indexes for chat_logs
CREATE INDEX idx_chat_session ON chat_logs(session_id);
CREATE INDEX idx_chat_created ON chat_logs(created_at DESC);

-- Create the newsletter_subscribers table
CREATE TABLE newsletter_subscribers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255),
    
    status VARCHAR(50) DEFAULT 'active',
    source VARCHAR(100),
    
    unsubscribed_at TIMESTAMPTZ
);

-- Indexes for newsletter_subscribers
CREATE INDEX idx_newsletter_email ON newsletter_subscribers(email);
CREATE INDEX idx_newsletter_status ON newsletter_subscribers(status);

-- Enable RLS for all tables
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE estimates ENABLE ROW LEVEL SECURITY;
ALTER TABLE chat_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- RLS policies
-- Allow anonymous insert for all tables
CREATE POLICY "Allow anonymous insert" ON contacts FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Allow anonymous insert" ON estimates FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Allow anonymous insert" ON chat_logs FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Allow anonymous insert" ON newsletter_subscribers FOR INSERT TO anon WITH CHECK (true);

-- Allow authenticated read for all tables
CREATE POLICY "Allow authenticated read" ON contacts FOR SELECT TO authenticated USING (true);
CREATE POLICY "Allow authenticated read" ON estimates FOR SELECT TO authenticated USING (true);
CREATE POLICY "Allow authenticated read" ON chat_logs FOR SELECT TO authenticated USING (true);
CREATE POLICY "Allow authenticated read" ON newsletter_subscribers FOR SELECT TO authenticated USING (true);

-- Allow authenticated update for all tables
CREATE POLICY "Allow authenticated update" ON contacts FOR UPDATE TO authenticated USING (true);
CREATE POLICY "Allow authenticated update" ON estimates FOR UPDATE TO authenticated USING (true);
CREATE POLICY "Allow authenticated update" ON chat_logs FOR UPDATE TO authenticated USING (true);
CREATE POLICY "Allow authenticated update" ON newsletter_subscribers FOR UPDATE TO authenticated USING (true);