import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Calendar,
  MessageCircle
} from 'lucide-react'

const contactInfo = [
  {
    icon: MapPin,
    label: 'Address',
    value: '123 Business Street\nSuite 100\nSan Francisco, CA 94105'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (555) 123-4567'
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@nexfolio.com'
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Mon - Fri: 9:00 AM - 6:00 PM\nSat: 10:00 AM - 2:00 PM\nSun: Closed'
  }
]

export function ContactDetails() {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Get in Touch</CardTitle>
          <p className="text-muted-foreground">
            We&apos;re here to help you succeed. Reach out to us through any of these channels.
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          {contactInfo.map((info, index) => {
            const Icon = info.icon
            return (
              <div key={index} className="flex items-start space-x-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-sm">{info.label}</div>
                  <div className="text-muted-foreground text-sm whitespace-pre-line">
                    {info.value}
                  </div>
                </div>
              </div>
            )
          })}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button className="w-full justify-start" variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Schedule a Consultation
          </Button>
          <Button className="w-full justify-start" variant="outline">
            <MessageCircle className="mr-2 h-4 w-4" />
            Live Chat Support
          </Button>
          <Button className="w-full justify-start" variant="outline">
            <Phone className="mr-2 h-4 w-4" />
            Request a Callback
          </Button>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
        <CardContent className="p-6 text-center">
          <h3 className="font-semibold mb-2">Emergency Support</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Need urgent assistance? We offer 24/7 emergency support for critical issues.
          </p>
          <Button variant="outline" size="sm">
            Emergency Contact
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
