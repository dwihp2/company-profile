import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Heart, Target, Lightbulb, Users, Shield, Zap } from 'lucide-react'

const values = [
  {
    icon: Heart,
    title: 'Passion',
    description: 'We love what we do and it shows in every project we deliver.'
  },
  {
    icon: Target,
    title: 'Excellence',
    description: 'We strive for perfection in every detail and never settle for less.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We embrace new technologies and creative solutions to stay ahead.'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We believe in the power of teamwork and open communication.'
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'We conduct business with honesty, transparency, and ethical practices.'
  },
  {
    icon: Zap,
    title: 'Agility',
    description: 'We adapt quickly to changes and deliver solutions efficiently.'
  }
]

export function CompanyValues() {
  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Our Values</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          These core values guide everything we do and shape how we work with our clients and team
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {values.map((value, index) => {
          const Icon = value.icon
          return (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-3 rounded-lg w-fit mb-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
