import { Description, Field, Label, Switch } from '@headlessui/react'
import { useState } from 'react'

function Example() {
  const [enabled, setEnabled] = useState(false)

  return (
    <Field className="flex items-center gap-3">
      <Label className="text-sm font-medium text-gray-700">
        Activar opción
      </Label>

      <Switch
        checked={enabled}
        onChange={setEnabled}
        className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-300 transition data-[checked]:bg-blue-600"
      >
        <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
      </Switch>

      <Description className="text-xs text-gray-500">
        Estado: {enabled ? 'Activado' : 'Desactivado'}
      </Description>
    </Field>
  )
}

export default Example
