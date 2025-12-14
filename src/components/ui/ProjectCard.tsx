'use client'

import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, ArrowUpRight } from 'lucide-react'
import { useCursorState } from '@/hooks/useCursorState'

export interface ProjectCardProps {
  slug: string
  title: string
  category: 'website' | 'webapp' | 'ai_agent' | 'rag' | 'automation'
  hours: number
  imageUrl: string
}

export function ProjectCard({
  slug,
  title,
  category,
  hours,
  imageUrl,
}: ProjectCardProps) {
  const { setCursorType } = useCursorState()

  // Validate imageUrl to prevent crashes with local paths (e.g. pasted from clipboard)
  const isValidUrl = typeof imageUrl === 'string' && (imageUrl.startsWith('/') || imageUrl.startsWith('http'))
  
  if (imageUrl && !isValidUrl) {
    console.warn(`[ProjectCard] Invalid imageUrl detected for project "${title}":`, imageUrl)
  }

  const safeImageUrl = isValidUrl ? imageUrl : '/images/placeholder.svg'

  return (
    <Link 
      href={`/progetti/${slug}`}
      onMouseEnter={() => setCursorType('hover')}
      onMouseLeave={() => setCursorType('default')}
    >
      <Card className="group overflow-hidden border-transparent hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg relative h-full">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={safeImageUrl}
            alt={title}
            width={800}
            height={450}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={85}
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQ1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjQ1MCIgZmlsbD0iIzE5MTkxOSIvPjwvc3ZnPg=="
            className="object-cover w-full h-auto group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-4 left-4">
            <Badge variant={category}>{category.replace('_', ' ')}</Badge>
          </div>
        </div>
        <div className="p-4 relative">
          <h3 className="font-bold text-lg pr-6">{title}</h3>
          <div className="flex items-center text-sm text-text-secondary mt-2">
            <Clock className="h-4 w-4 mr-2" />
            <span>{hours}h stimate</span>
          </div>
          
          {/* Hover Arrow Icon */}
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 text-primary">
            <ArrowUpRight className="h-5 w-5" />
          </div>
        </div>
      </Card>
    </Link>
  )
}
