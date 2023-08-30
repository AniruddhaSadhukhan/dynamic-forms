const commonEditFormOptions = [
  {
    key: 'layout',
    components: [
      {
        key: 'overlay',
        ignore: true,
      },
    ],
  },
  {
    key: 'api',
    label: 'Submission',
    components: [
      {
        key: 'tags',
        ignore: true,
      },
      {
        key: 'properties',
        ignore: true,
      },
    ],
  },
];

const commonDisplayEditFormOptions = [
  {
    key: 'tableView',
    ignore: true,
  },
];

const commonDataEditFormOptions = [
  {
    key: 'persistent',
    ignore: true,
  },
  {
    key: 'protected',
    ignore: true,
  },
  {
    key: 'dbIndex',
    ignore: true,
  },
  {
    key: 'encrypted',
    ignore: true,
  },
  {
    key: 'calculateServer',
    ignore: true,
  },
];

const commonValidationEditFormOptions = [
  {
    key: 'unique',
    ignore: true,
  },
];

const defaultEditFormOptions = [
  ...commonEditFormOptions,
  {
    key: 'display',
    components: commonDisplayEditFormOptions,
  },
  {
    key: 'data',
    components: commonDataEditFormOptions,
  },
  {
    key: 'validation',
    components: commonValidationEditFormOptions,
  },
];

export const options = {
  noDefaultSubmitButton: true,
  builder: {
    basic: {
      components: {
        password: false,
        submitButton: {
          title: 'Submit Button',
          key: 'submitButton',
          icon: 'floppy-o',
          weight: 100,
          schema: {
            type: 'button',
            key: 'submit',
            leftIcon: 'fa fa-floppy-o',
            disableOnInvalid: true,
          },
        },
        resetButton: {
          title: 'Reset Button',
          key: 'resetButton',
          icon: 'eraser',
          weight: 101,
          schema: {
            label: 'Reset',
            type: 'button',
            key: 'reset',
            leftIcon: 'fa fa-eraser',
            action: 'reset',
            theme: 'danger',
          },
        },
      },
    },
    advanced: {
      components: {
        address: false,
      },
    },
    premium: false,
    resource: false,
  },
  editForm: {
    textfield: defaultEditFormOptions,
    textarea: [
      ...commonEditFormOptions,
      {
        key: 'display',
        components: [
          ...commonDisplayEditFormOptions,
          {
            key: 'isUploadEnabled',
            ignore: true,
          },
        ],
      },
      {
        key: 'data',
        components: commonDataEditFormOptions,
      },
      {
        key: 'validation',
        components: commonValidationEditFormOptions,
      },
    ],
    number: defaultEditFormOptions,
    checkbox: [
      ...commonEditFormOptions,
      {
        key: 'display',
        components: [
          ...commonDisplayEditFormOptions,
          {
            key: 'inputType',
            ignore: true,
          },
        ],
      },
      {
        key: 'data',
        components: commonDataEditFormOptions,
      },
      {
        key: 'validation',
        components: commonValidationEditFormOptions,
      },
    ],
    selectboxes: defaultEditFormOptions,
    select: defaultEditFormOptions,
    radio: defaultEditFormOptions,
    button: defaultEditFormOptions,
    email: [
      ...commonEditFormOptions,
      {
        key: 'display',
        components: commonDisplayEditFormOptions,
      },
      {
        key: 'data',
        components: commonDataEditFormOptions,
      },
      {
        key: 'validation',
        components: [
          ...commonValidationEditFormOptions,
          {
            key: 'kickbox',
            ignore: true,
          },
        ],
      },
    ],
    url: defaultEditFormOptions,
    phoneNumber: defaultEditFormOptions,
    tags: defaultEditFormOptions,
    datetime: defaultEditFormOptions,
    day: defaultEditFormOptions,
    time: defaultEditFormOptions,
    currency: defaultEditFormOptions,
    signature: defaultEditFormOptions,
    htmlelement: defaultEditFormOptions,
    content: defaultEditFormOptions,
    columns: defaultEditFormOptions,
    fieldset: defaultEditFormOptions,
    panel: defaultEditFormOptions,
    well: defaultEditFormOptions,
    hidden: defaultEditFormOptions,
    container: defaultEditFormOptions,
    datamap: defaultEditFormOptions,
    datagrid: defaultEditFormOptions,
    editgrid: defaultEditFormOptions,
  },
};
