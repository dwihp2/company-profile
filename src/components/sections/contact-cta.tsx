import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, MessageCircle } from 'lucide-react'

export function ContactCTA() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-12 text-center text-white">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Ready to Start Your Next Project?
              </h2>
              <p className="text-xl opacity-90">
                Let&apos;s discuss how we can help transform your business with innovative solutions
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Get In Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link href="#">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Schedule a Call
                </Link>
              </Button>
            </div>

            <div className="pt-8 border-t border-white/20">
              <p className="text-sm opacity-75">
                Join 25+ companies that trust us with their digital transformation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
