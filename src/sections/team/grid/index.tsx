import { TeamCard } from 'src/components/cards/team/v1';
import { Container } from '@/src/components/container';
import { teamSectionData } from '@/data/team-section/v1';
import { cn } from '@/src/utils/shadcn';

export function TeamSection() {
  const { cards } = teamSectionData;
  return (
    <section className="section-padding-primary overflow-hidden">
      <Container>
        {cards && cards.length > 0 && (
          <div className="grid justify-items-center gap-30px md:grid-cols-2 xl:grid-cols-3">
            {cards.map((card, index) => (
              <div key={index} className="relative">
                <TeamCard
                  {...card}
                  contentWrapperClassName={cn('dark:bg-accent-700')}
                />
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
