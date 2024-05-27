import { Container } from '@/src/components/container';
import { getStaggeredDelay } from '@/src/utils/set-staggered-delay';
import { cn } from '@/src/utils/shadcn';
import { ClassValue } from 'clsx';
import { ServiceCard, ServiceProps } from 'src/components/cards/service/v1';

export interface ServiceSectionProps {
  services: ServiceProps[];
  className?: ClassValue;
}

export function ServiceSection({ services, className }: ServiceSectionProps) {
  return (
    <section className={cn('section-padding-primary', className)}>
      <Container>
        <div className="pb-32 pt-2 text-center">
          <div
            data-aos="fade-up"
            data-aos-delay={getStaggeredDelay([200, 400, 600], 0)}
            className="mx-auto"
          >
            <h1 className="3xl:text-4xl 3xl:text-4xl whitespace-nowrap text-lg font-bold sm:text-xl md:text-2xl lg:text-3xl 2xl:text-3xl">
              Innovative Gaming. Fueled by Fire.
            </h1>
          </div>
        </div>
        {services && services.length > 0 && (
          <div className="-mx-4 flex flex-wrap justify-center gap-y-30px">
            {services.map((service, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={getStaggeredDelay([200, 400, 600], index + 1)}
                className="w-full px-4 md:w-1/2 md:px-[15px] lg:w-1/3"
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
