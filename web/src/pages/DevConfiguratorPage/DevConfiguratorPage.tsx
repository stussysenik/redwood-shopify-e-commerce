import { Metadata } from '@redwoodjs/web'
import { ThemeConfigurator } from 'src/components/dev/ThemeConfigurator/ThemeConfigurator'

const DevConfiguratorPage = () => {
  if (process.env.NODE_ENV === 'production') {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
        <h1 className="font-serif text-3xl font-bold text-stone-900">Not Available</h1>
        <p className="mt-2 text-stone-500">The design configurator is only available in development mode.</p>
      </div>
    )
  }

  return (
    <div>
      <Metadata title="Design Configurator" description="Customize the Redwood Diner theme" />
      <ThemeConfigurator />
    </div>
  )
}

export default DevConfiguratorPage
