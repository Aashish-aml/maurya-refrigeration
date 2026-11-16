export type Part = {
  name: string;
  description: string;
};

export type Appliance = {
  slug: string;
  label: string;
  summary: string;
  description: string;
  parts: Part[];
};

export const appliances: Appliance[] = [
  {
    slug: "washing-machine",
    label: "Washing Machine",
    summary: "Pumps, motors, boards and door locks for front-load and top-load machines.",
    description:
      "Spare parts for semi-automatic and fully automatic washing machines. Share the brand and model number on WhatsApp and we will confirm the right part.",
    parts: [
      { name: "Drain Pump", description: "Front & top load" },
      { name: "Inlet Valve", description: "Single & double" },
      { name: "Wash Motor", description: "Semi & fully automatic" },
      { name: "Drive Belt", description: "All brand sizes" },
      { name: "PCB Board", description: "Control & display" },
      { name: "Door Lock", description: "Front-load interlocks" },
      { name: "Timer & Switch", description: "Wash & spin timers" },
      { name: "Pulsator & Shaft", description: "Gearbox & clutch" },
    ],
  },
  {
    slug: "microwave",
    label: "Microwave",
    summary: "Magnetrons, high-voltage parts, turntable motors and control boards.",
    description:
      "Spare parts for solo and convection microwaves. Tell us the brand and model number on WhatsApp and we will check what fits.",
    parts: [
      { name: "Magnetron", description: "Solo & convection" },
      { name: "HV Capacitor", description: "All ratings" },
      { name: "HV Diode", description: "Standard fit" },
      { name: "Turntable Motor", description: "Synchronous" },
      { name: "Glass Plate", description: "All diameters" },
      { name: "Door Switch", description: "Interlock sets" },
      { name: "Control Board", description: "Touch & dial" },
      { name: "Fuse & Thermal Cutout", description: "Safety parts" },
    ],
  },
  {
    slug: "refrigerator",
    label: "Refrigerator",
    summary: "Compressors, gaskets, relays, fans and refrigerant gas.",
    description:
      "Spare parts for single-door, double-door and frost-free refrigerators. Send the brand and model on WhatsApp for price and availability.",
    parts: [
      { name: "Compressor", description: "Reciprocating & inverter" },
      { name: "Thermostat", description: "Mechanical & digital" },
      { name: "Door Gasket", description: "All sizes, magnetic" },
      { name: "Defrost Timer", description: "Frost-free models" },
      { name: "Relay & OLP", description: "Starter kits" },
      { name: "Fan Motor", description: "Evaporator & condenser" },
      { name: "PCB Board", description: "Main & inverter boards" },
      { name: "Gas & Filter Drier", description: "R134a, R600a" },
    ],
  },
  {
    slug: "air-conditioner",
    label: "Air Conditioner",
    summary: "Compressors, capacitors, fan motors, gas and installation parts.",
    description:
      "Spare parts for split and window air conditioners. Share the brand, model and tonnage on WhatsApp and we will confirm the part.",
    parts: [
      { name: "Compressor", description: "Split & window" },
      { name: "Run Capacitor", description: "Single & dual" },
      { name: "Fan Motor", description: "Indoor & outdoor" },
      { name: "PCB & Remote", description: "Universal & OEM" },
      { name: "Refrigerant Gas", description: "R22, R32, R410A" },
      { name: "Contactor", description: "Outdoor units" },
      { name: "Blower Wheel", description: "Cross-flow" },
      { name: "Copper Pipe & Kit", description: "Installation parts" },
    ],
  },
];

export function getAppliance(slug: string) {
  return appliances.find((appliance) => appliance.slug === slug);
}
