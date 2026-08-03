import type { ComponentType } from 'react';

import type { IconProps } from '@primeicons/react/core';
import { Clipboard } from '@primeicons/react/clipboard';
import { Shield } from '@primeicons/react/shield';
import { Shop } from '@primeicons/react/shop';
import { Users } from '@primeicons/react/users';

interface Capability {
  readonly description: string;
  readonly icon: ComponentType<IconProps>;
  readonly iconClassName: string;
  readonly iconContainerClassName: string;
  readonly title: string;
}

const CAPABILITIES: readonly Capability[] = [
  {
    title: 'Role-Based Access',
    description: 'Granular permissions for staff and buyers across the platform.',
    icon: Shield,
    iconClassName: 'text-blue-700',
    iconContainerClassName: 'bg-blue-100 ring-blue-200',
  },
  {
    title: 'Shop-Level Scope',
    description: 'Data isolation and operational control at the shop level.',
    icon: Shop,
    iconClassName: 'text-emerald-700',
    iconContainerClassName: 'bg-emerald-100 ring-emerald-200',
  },
  {
    title: 'Buyer Profiles',
    description: 'Buyer accounts, groups, and purchasing preferences.',
    icon: Users,
    iconClassName: 'text-indigo-600',
    iconContainerClassName: 'bg-indigo-100 ring-indigo-200',
  },
  {
    title: 'Audit Logs',
    description: 'Trace important user actions and operational changes.',
    icon: Clipboard,
    iconClassName: 'text-emerald-700',
    iconContainerClassName: 'bg-emerald-100 ring-emerald-200',
  },
] as const;

export function CapabilityHighlights() {
  return (
    <section className="mt-6 sm:mt-8" aria-labelledby="platform-capabilities-heading">
      <h2 id="platform-capabilities-heading" className="sr-only">
        Platform capabilities
      </h2>
      <ul className="m-0 grid list-none gap-3 p-0 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
        {CAPABILITIES.map((capability) => {
          const Icon = capability.icon;

          return (
            <li
              key={capability.title}
              className="flex min-w-0 items-start gap-3 rounded-xl border border-surface bg-surface-0/90 p-4 shadow-sm backdrop-blur"
            >
              <span
                className={`grid size-11 shrink-0 place-items-center rounded-full ring-1 ${capability.iconContainerClassName}`}
                aria-hidden="true"
              >
                <Icon className={capability.iconClassName} size={22} />
              </span>
              <div className="min-w-0">
                <h3 className="m-0 text-sm font-bold text-color">{capability.title}</h3>
                <p className="mb-0 mt-1 text-xs leading-5 text-muted-color">
                  {capability.description}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
