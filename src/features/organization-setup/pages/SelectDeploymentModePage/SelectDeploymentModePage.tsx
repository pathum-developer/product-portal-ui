import { Building } from '@primeicons/react/building';

import { CapabilityHighlights } from '@/features/organization-setup/components/CapabilityHighlights';
import { DeploymentModeSelector } from '@/features/organization-setup/components/DeploymentModeSelector';
import { SetupProcess } from '@/features/organization-setup/components/SetupProcess';

const DECORATIVE_ORGANIZATIONS = [
  'Nittambuwa Branch',
  'Boralesgamuwa Branch',
  'Colombo Branch',
] as const;

function OrganizationStackDecoration() {
  return (
    <div
      className="absolute left-4 top-40 hidden w-44 -rotate-1 xl:block 2xl:left-8"
      aria-hidden="true"
    >
      <span className="absolute -right-12 top-12 h-28 w-16 rounded-r-[2rem] border-r border-t border-dashed border-teal-500/70" />
      <div className="relative rounded-xl border border-blue-100 bg-surface-0/95 p-3 shadow-lg backdrop-blur">
        <div className="flex items-center gap-2 border-b border-slate-100 pb-2 text-[10px] font-bold text-slate-700">
          <span className="grid size-7 place-items-center rounded-full bg-teal-50 text-teal-700">
            <Building size={15} />
          </span>
          GM Marckating
        </div>
        <div className="mt-2 space-y-2">
          {DECORATIVE_ORGANIZATIONS.map((organization) => (
            <div key={organization} className="flex items-center gap-2 rounded-lg bg-slate-50 p-2">
              <Building className="shrink-0 text-teal-600" size={13} />
              <div className="min-w-0 flex-1">
                <span className="block truncate text-[9px] font-medium text-slate-600">
                  {organization}
                </span>
                <span className="mt-1 block h-1 w-full rounded-full bg-slate-200" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StandaloneOrganizationDecoration() {
  return (
    <div
      className="absolute right-4 top-48 hidden w-40 rotate-1 xl:block 2xl:right-8"
      aria-hidden="true"
    >
      <div className="rounded-xl border border-emerald-100 bg-surface-0/95 px-4 py-5 text-center shadow-lg backdrop-blur">
        <p className="m-0 text-[10px] font-bold text-slate-700">Default Organization</p>
        <span className="mx-auto mt-4 grid size-12 place-items-center rounded-full bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100">
          <Building size={24} />
        </span>
        <div className="mt-5 space-y-2">
          <span className="mx-auto block h-1.5 w-full rounded-full bg-slate-200" />
          <span className="mx-auto block h-1.5 w-4/5 rounded-full bg-slate-200" />
          <span className="mx-auto block h-1.5 w-1/2 rounded-full bg-slate-200" />
        </div>
      </div>
    </div>
  );
}

export function SelectDeploymentModePage() {
  return (
    <div className="relative isolate overflow-hidden bg-surface-50">
      <div
        className="pointer-events-none absolute -left-36 -top-32 size-[28rem] rounded-full bg-blue-100/55 blur-sm"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-44 top-8 size-[30rem] rounded-full bg-blue-100/45 blur-sm"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-20 top-72 size-48 rounded-full bg-emerald-100/35 blur-2xl"
        aria-hidden="true"
      />

      <OrganizationStackDecoration />
      <StandaloneOrganizationDecoration />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <header className="mx-auto max-w-5xl text-center">
          <h1 className="m-0 text-3xl font-extrabold tracking-tight text-[#081f3d] sm:text-4xl lg:text-5xl">
            Register and use / Get your own system and start selling your products online
          </h1>
          <p className="mx-auto mb-0 mt-3 max-w-2xl text-base leading-7 text-muted-color sm:mt-4 sm:text-lg">
            Manage organizations, shops, staff, buyers, and orders securely.
          </p>
        </header>

        <section
          className="mx-auto mt-8 max-w-4xl sm:mt-10"
          aria-labelledby="deployment-mode-options-heading"
        >
          <h2 id="deployment-mode-options-heading" className="sr-only">
            Choose a deployment path
          </h2>
          <DeploymentModeSelector />
        </section>

        <CapabilityHighlights />
        <SetupProcess />
      </div>
    </div>
  );
}
