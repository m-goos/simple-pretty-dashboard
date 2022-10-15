import { useState } from 'react';
import { RadioGroup } from '@headlessui/react';

interface RadioGroupButtonsProps {
  options: string[];
}

function RadioGroupButtons({ options }: RadioGroupButtonsProps) {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="w-fit rounded-lg border border-solid border-sky-900 border-opacity-25 p-1">
      <div className="mx-auto w-full max-w-md">
        <RadioGroup value={selected} onChange={setSelected}>
          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
          <div className="flex flex-row space-x-2">
            {options.map((option) => (
              <RadioGroup.Option
                key={option}
                value={option}
                className={({ active, checked }) =>
                  `${
                    active
                      ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300'
                      : ''
                  }
                  ${
                    checked
                      ? 'bg-sky-900 bg-opacity-75 text-white'
                      : 'bg-gray-100'
                  }
                    relative flex cursor-pointer rounded-lg px-2 py-1 shadow-md focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center">
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium  ${
                              checked ? 'text-white' : 'text-gray-900'
                            }`}
                          >
                            {option}
                          </RadioGroup.Label>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}

export default RadioGroupButtons;
