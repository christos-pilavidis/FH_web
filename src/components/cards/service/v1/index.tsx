import { cn } from '@/src/utils/shadcn';

export interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function ServiceCard({ icon, title, description }: ServiceProps) {
  return (
    <article
      className={cn([
        // General
        'group/service bg-white text-accent-900 shadow-3 transition-transform duration-350 dark:bg-accent-700 dark:text-white dark:shadow-none',

        // Layout
        'relative z-1 block h-full space-y-6 overflow-hidden rounded-5 p-6 md:space-y-7 md:p-10',

        //Hover
        'hover:[transform:translateY(-.5rem)]',
      ])}
    >
      <div className="flex items-center gap-5">
        <span className="flex-none text-[2.5rem] transition-all duration-300 group-hover/service:scale-90 group-hover/service:text-primary md:text-[4rem]">
          {icon}
        </span>
        <h2 className="text-md font-bold leading-[1.25] md:text-lg">{title}</h2>
      </div>
      <p className="text-accent-800 dark:text-body">{description}</p>

      {/* Bottom line animation */}
      <span className="invisible absolute bottom-0 left-0 h-[2px] w-full scale-x-[30%] bg-primary opacity-0 transition-all duration-400 group-hover/service:visible group-hover/service:scale-x-100 group-hover/service:opacity-100"></span>
    </article>
  );
}
