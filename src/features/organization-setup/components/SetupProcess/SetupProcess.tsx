import type { ComponentType } from 'react';

import { Building } from '@primeicons/react/building';
import { ChartBar } from '@primeicons/react/chart-bar';
import { Clipboard } from '@primeicons/react/clipboard';
import type { IconProps } from '@primeicons/react/core';
import { Users } from '@primeicons/react/users';

interface SetupStep {
  readonly description: string;
  readonly icon: ComponentType<IconProps>;
  readonly iconClassName: string;
  readonly iconContainerClassName: string;
  readonly title: string;
}

const SETUP_STEPS: readonly SetupStep[] = [
  {
    title: 'Choose your path',
    description: 'Select multi-tenant SaaS or explore a standalone environment.',
    icon: Clipboard,
    iconClassName: 'text-blue-700',
    iconContainerClassName: 'bg-blue-50 ring-blue-200',
  },
  {
    title: 'Set up your organization',
    description: 'Register your business or contact our team for standalone provisioning.',
    icon: Building,
    iconClassName: 'text-emerald-700',
    iconContainerClassName: 'bg-emerald-50 ring-emerald-200',
  },
  {
    title: 'Invite users and shops',
    description: 'Add staff, shops, and buyers, then assign their roles.',
    icon: Users,
    iconClassName: 'text-blue-700',
    iconContainerClassName: 'bg-blue-50 ring-blue-200',
  },
  {
    title: 'Start operating',
    description: 'Manage orders, track activity, and grow with confidence.',
    icon: ChartBar,
    iconClassName: 'text-emerald-700',
    iconContainerClassName: 'bg-emerald-50 ring-emerald-200',
  },
] as const;

export function SetupProcess() {
  return (
    <section className="mt-10 sm:mt-12" aria-labelledby="setup-process-heading">
      <h2
        id="setup-process-heading"
        className="m-0 text-center text-xl font-bold tracking-tight text-[#0a2342] sm:text-2xl"
      >
        How it works
      </h2>

      <div className="relative mt-6 sm:mt-8">
        <span
          className="absolute left-[12.5%] right-[12.5%] top-7 hidden border-t border-dashed border-slate-300 lg:block"
          aria-hidden="true"
        />
        <ol className="relative m-0 grid list-none gap-5 p-0 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {SETUP_STEPS.map((step, index) => {
            const Icon = step.icon;

            return (
              <li
                key={step.title}
                className="flex items-start gap-4 rounded-xl border border-surface bg-surface-0/80 p-4 shadow-sm sm:min-h-32 lg:flex-col lg:items-center lg:border-0 lg:bg-transparent lg:p-0 lg:text-center lg:shadow-none"
              >
                <span
                  className={`relative z-10 grid size-14 shrink-0 place-items-center rounded-full bg-surface-0 ring-1 shadow-md ${step.iconContainerClassName}`}
                  aria-hidden="true"
                >
                  <Icon className={step.iconClassName} size={25} />
                </span>
                <div className="min-w-0 lg:px-2">
                  <h3 className="m-0 text-sm font-bold text-color">
                    <span className="mr-1">{index + 1}.</span>
                    {step.title}
                  </h3>
                  <p className="mb-0 mt-1.5 text-xs leading-5 text-muted-color">
                    {step.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
