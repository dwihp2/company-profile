import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export function CompanyOverview() {
  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <div>
          <Badge className="mb-4">Est. 2019</Badge>
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Founded in 2019, Nexfolio emerged from a simple vision: to bridge the gap
              between innovative technology and business success. What started as a small
              team of passionate developers has grown into a full-service digital agency.
            </p>
            <p>
              Today, we partner with businesses of all sizes, from startups to enterprises,
              helping them navigate digital transformation and achieve sustainable growth
              through cutting-edge solutions.
            </p>
          </div>
        </div>
      </div>

      <Card>
        <CardContent className="p-8">
          <h3 className="text-xl font-semibold mb-6">Company Highlights</h3>
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">25+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
