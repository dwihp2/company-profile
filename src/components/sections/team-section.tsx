import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Linkedin, Twitter, Github } from 'lucide-react'

const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    bio: 'Visionary leader with 10+ years in tech strategy and business development.',
    avatar: '👩‍💼',
    skills: ['Strategy', 'Leadership', 'Business Development']
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    bio: 'Full-stack architect passionate about scalable solutions and emerging technologies.',
    avatar: '👨‍💻',
    skills: ['Architecture', 'DevOps', 'Cloud Computing']
  },
  {
    name: 'Emily Rodriguez',
    role: 'Lead Designer',
    bio: 'Creative designer focused on user experience and beautiful, functional interfaces.',
    avatar: '👩‍🎨',
    skills: ['UI/UX Design', 'Prototyping', 'User Research']
  },
  {
    name: 'David Kim',
    role: 'Senior Developer',
    bio: 'Backend specialist with expertise in microservices and database optimization.',
    avatar: '👨‍🔧',
    skills: ['Backend Development', 'APIs', 'Databases']
  },
  {
    name: 'Lisa Wang',
    role: 'Product Manager',
    bio: 'Strategic product leader who bridges the gap between business and technology.',
    avatar: '👩‍💼',
    skills: ['Product Strategy', 'Agile', 'Analytics']
  },
  {
    name: 'Alex Thompson',
    role: 'Marketing Lead',
    bio: 'Digital marketing expert specializing in growth strategies and brand development.',
    avatar: '👨‍💼',
    skills: ['Digital Marketing', 'SEO', 'Content Strategy']
  }
]

export function TeamSection() {
  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Our diverse team of experts brings together creativity, technical excellence, and strategic thinking
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <Card key={index} className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="text-6xl mb-4">{member.avatar}</div>

                <div>
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-primary font-medium">{member.role}</p>
                </div>

                <p className="text-sm text-muted-foreground">{member.bio}</p>

                <div className="flex flex-wrap gap-1 justify-center">
                  {member.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="flex justify-center space-x-2">
                  <Button size="sm" variant="ghost">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="ghost">
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="ghost">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
