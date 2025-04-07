import { Registry } from "./schema";

export const ui: Registry = [
  {
    name: "my-button",
    type: "registry:block",
    registryDependencies: ["button"],
    files: [
      "block/base-component/my-button.tsx",
      "block/base-component/my-icon.tsx",
      "block/common-icon.tsx",
    ],
  },
  {
    name: "my-icon",
    type: "registry:block",
    dependencies: ["iconify-icon"],
    files: ["block/base-component/my-icon.tsx", "block/common-icon.tsx"],
  },
  {
    name: "my-input",
    type: "registry:block",
    registryDependencies: ["input"],
    files: ["block/base-component/my-input.tsx"],
  },
  {
    name: "my-checkbox",
    type: "registry:block",
    registryDependencies: ["checkbox"],
    files: ["block/base-component/my-checkbox.tsx"],
  },
  {
    name: "my-combobox",
    type: "registry:block",
    registryDependencies: ["button", "command", "popover", "badge"],
    files: [
      "block/base-component/my-combobox.tsx",
      "block/base-component/my-icon.tsx",
      "block/common-icon.tsx",
    ],
  },
  {
    name: "my-debounce-input",
    type: "registry:block",
    registryDependencies: ["input"],
    files: [
      "block/base-component/my-debounce-input.tsx",
      "block/base-component/my-input.tsx",
      "hook/use-debounced-callback.ts",
      "hook/use-callback-ref.ts",
      "hook/use-debounce.ts",
    ],
  },
  {
    name: "my-virtual-combobox-async",
    type: "registry:block",
    registryDependencies: ["button", "command", "popover", "badge"],
    dependencies: ["@tanstack/react-virtual", "@tanstack/react-query"],
    files: [
      "block/base-component/my-virtual-combobox-async.tsx",
      "block/base-component/my-icon.tsx",
      "block/common-icon.tsx",
      "hook/useBoolean.ts",
      "hook/useSet.ts",
    ],
  },
  {
    name: "form-input",
    type: "registry:block",
    registryDependencies: ["form", "input"],
    files: ["block/form/form-input.tsx", "block/base-component/my-input.tsx"],
  },
  {
    name: "form-textarea",
    type: "registry:block",
    registryDependencies: ["form", "textarea"],
    files: ["block/form/form-textarea.tsx"],
  },
  {
    name: "form-checkbox",
    type: "registry:block",
    registryDependencies: ["form", "checkbox"],
    files: ["block/form/form-checkbox.tsx"],
  },
  {
    name: "form-combobox",
    type: "registry:block",
    registryDependencies: ["form", "button", "command", "popover"],
    files: [
      "block/form/form-combobox.tsx",
      "block/base-component/my-combobox.tsx",
      "block/base-component/my-icon.tsx",
      "block/common-icon.tsx",
    ],
  },
  {
    name: "form-datepicker",
    type: "registry:block",
    registryDependencies: ["form", "button", "calendar", "popover"],
    files: [
      "block/form/form-datepicker.tsx",
      "block/base-component/my-icon.tsx",
      "block/common-icon.tsx",
    ],
  },
  {
    name: "form-date-range-picker",
    type: "registry:block",
    registryDependencies: ["form", "button", "calendar", "popover"],
    files: [
      "block/form/form-date-range-picker.tsx",
      "block/base-component/my-icon.tsx",
      "block/common-icon.tsx",
    ],
  },
  {
    name: "form-select",
    type: "registry:block",
    registryDependencies: ["form", "select"],
    files: ["block/form/form-select.tsx"],
  },
  {
    name: "form-slider",
    type: "registry:block",
    registryDependencies: ["form", "slider"],
    files: ["block/form/form-slider.tsx"],
  },
  {
    name: "form-switch",
    type: "registry:block",
    registryDependencies: ["form", "switch"],
    files: ["block/form/form-switch.tsx"],
  },
  {
    name: "form-virtual-combobox-async",
    type: "registry:block",
    registryDependencies: ["form", "button", "command", "popover"],
    dependencies: ["@tanstack/react-virtual", "@tanstack/react-query"],
    files: [
      "block/form/form-virtual-combobox-async.tsx",
      "block/base-component/my-virtual-combobox-async.tsx",
      "block/base-component/my-icon.tsx",
      "block/common-icon.tsx",
      "hook/useBoolean.ts",
      "hook/useSet.ts",
    ],
  },
];
