import { ArrowRight } from '@primeicons/react/arrow-right';
import { Building } from '@primeicons/react/building';
import { Users } from '@primeicons/react/users';
import { Link } from 'react-router';

interface DeploymentModeCardProps {
  readonly description: string;
  readonly href: string;
  readonly icon: typeof Users;
  readonly id: string;
  readonly linkLabel: string;
  readonly preview: React.ReactNode;
  readonly title: string;
  readonly tone: 'blue' | 'green';
}

const TONE_STYLES = {
  blue: {
    card: 'border-blue-200 bg-gradient-to-br from-blue-50/90 via-surface-0 to-blue-50/60 hover:border-blue-400 focus-visible:outline-blue-600',
    icon: 'bg-blue-100 text-blue-700 ring-blue-200',
    title: 'text-blue-700',
    action: 'text-blue-700',
  },
  green: {
    card: 'border-emerald-200 bg-gradient-to-br from-emerald-50/80 via-surface-0 to-emerald-50/60 hover:border-emerald-400 focus-visible:outline-emerald-700',
    icon: 'bg-emerald-100 text-emerald-700 ring-emerald-200',
    title: 'text-emerald-700',
    action: 'text-emerald-700',
  },
} as const;

const ORGANIZATIONS = [
  { name: 'Org Alpha', shops: 12, users: 156 },
  { name: 'Org Beta', shops: 8, users: 98 },
  { name: 'Org Gamma', shops: 5, users: 64 },
] as const;

const STANDALONE_METRICS = [
  { label: 'Shops', value: '12' },
  { label: 'Staff', value: '156' },
  { label: 'Buyers', value: '1,248' },
  { label: 'Orders', value: '3,672' },
] as const;

function MultiTenantPreview() {
  return (
    <div
      className="overflow-hidden rounded-lg border border-blue-100 bg-surface-0 shadow-sm"
      aria-hidden="true"
    >
      <div className="flex min-h-36">
        <div className="flex w-10 shrink-0 flex-col items-center gap-3 bg-[#09264a] py-3 text-blue-100">
          <span className="grid size-5 place-items-center rounded bg-blue-500/30 text-[10px] font-bold">
            P
          </span>
          <span className="size-2 rounded-full bg-blue-300" />
          <span className="size-2 rounded-full bg-blue-300/70" />
          <span className="size-2 rounded-full bg-blue-300/40" />
        </div>

        <div className="min-w-0 flex-1 p-3">
          <div className="mb-3 flex items-center justify-between gap-2">
            <span className="text-[11px] font-semibold text-slate-700">Organizations</span>
            <span className="rounded bg-blue-600 px-2 py-1 text-[8px] font-semibold text-white">
              + New organization
            </span>
          </div>

          <div className="grid grid-cols-[1fr_auto_auto] gap-2 border-b border-slate-100 pb-1 text-[8px] font-medium text-slate-400">
            <span>Organization</span>
            <span>Shops</span>
            <span>Users</span>
          </div>
          {ORGANIZATIONS.map((organization) => (
            <div
              key={organization.name}
              className="grid grid-cols-[1fr_auto_auto] items-center gap-2 border-b border-slate-100 py-2 text-[9px] text-slate-600 last:border-0"
            >
              <span className="flex min-w-0 items-center gap-1.5 font-medium">
                <Building className="shrink-0 text-blue-600" size={11} />
                <span className="truncate">{organization.name}</span>
              </span>
              <span>{organization.shops}</span>
              <span>{organization.users}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StandalonePreview() {
  return (
    <div
      className="overflow-hidden rounded-lg border border-emerald-100 bg-surface-0 shadow-sm"
      aria-hidden="true"
    >
      <div className="flex min-h-36">
        <div className="flex w-10 shrink-0 flex-col items-center gap-3 bg-emerald-800 py-3 text-emerald-100">
          <span className="grid size-5 place-items-center rounded bg-emerald-500/30 text-[10px] font-bold">
            P
          </span>
          <span className="size-2 rounded-full bg-emerald-200" />
          <span className="size-2 rounded-full bg-emerald-200/70" />
          <span className="size-2 rounded-full bg-emerald-200/40" />
        </div>

        <div className="min-w-0 flex-1 p-3">
          <div className="mb-3 flex items-center gap-2">
            <span className="text-[11px] font-semibold text-slate-700">Default Organization</span>
            <span className="rounded-full bg-emerald-100 px-1.5 py-0.5 text-[7px] font-semibold text-emerald-700">
              Default
            </span>
          </div>

          <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-4">
            {STANDALONE_METRICS.map((metric) => (
              <div key={metric.label} className="rounded border border-slate-100 p-1.5">
                <p className="m-0 text-[7px] text-slate-400">{metric.label}</p>
                <p className="m-0 mt-0.5 text-[10px] font-semibold text-slate-700">
                  {metric.value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-2.5 rounded border border-slate-100 p-2">
            <div className="mb-1.5 flex justify-between text-[7px] font-medium text-slate-500">
              <span>Recent orders</span>
              <span className="text-emerald-700">View all</span>
            </div>
            <div className="space-y-1.5">
              <span className="block h-1.5 rounded-full bg-slate-100" />
              <span className="block h-1.5 w-4/5 rounded-full bg-slate-100" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DeploymentModeCard({
  description,
  href,
  icon: Icon,
  id,
  linkLabel,
  preview,
  title,
  tone,
}: DeploymentModeCardProps) {
  const descriptionId = `${id}-description`;
  const titleId = `${id}-title`;
  const styles = TONE_STYLES[tone];

  return (
    <Link
      className={`group flex h-full min-w-0 flex-col rounded-2xl border p-4 text-left text-color no-underline shadow-sm transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 motion-reduce:transform-none motion-reduce:transition-none sm:p-5 ${styles.card}`}
      to={href}
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
    >
      <div className="mb-4 flex items-start gap-3 sm:gap-4">
        <span
          className={`grid size-14 shrink-0 place-items-center rounded-full ring-1 shadow-sm sm:size-16 ${styles.icon}`}
          aria-hidden="true"
        >
          <Icon size={30} />
        </span>
        <div className="min-w-0 pt-1">
          <h2 id={titleId} className={`m-0 text-lg font-bold sm:text-xl ${styles.title}`}>
            {title}
          </h2>
          <p id={descriptionId} className="mb-0 mt-1 text-sm leading-5 text-muted-color">
            {description}
          </p>
        </div>
      </div>

      <div className="mt-auto">{preview}</div>

      <span
        className={`mt-4 flex items-center justify-between gap-3 text-sm font-semibold ${styles.action}`}
      >
        <span>{linkLabel}</span>
        <ArrowRight
          className="shrink-0 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transform-none"
          size={17}
          aria-hidden="true"
        />
      </span>
    </Link>
  );
}

export function DeploymentModeSelector() {
  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-5">
      <DeploymentModeCard
        id="multi-tenant-mode"
        title="Multi-tenant SaaS"
        description="Serve multiple organizations in one secure, scalable platform."
        href="/register/multi-tenant"
        linkLabel="Continue with multi-tenant"
        icon={Users}
        preview={<MultiTenantPreview />}
        tone="blue"
      />
      <DeploymentModeCard
        id="standalone-mode"
        title="Standalone Organization"
        description="Explore a dedicated environment for one organization, with pricing and contact options."
        href="/register/standalone"
        linkLabel="Explore standalone"
        icon={Building}
        preview={<StandalonePreview />}
        tone="green"
      />
    </div>
  );
}
