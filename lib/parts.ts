export const parts = {
  washer: [
    ["Drain Pump", "Front & top load"],
    ["Inlet Valve", "Single & double"],
    ["Wash Motor", "Semi & fully automatic"],
    ["Drive Belt", "All brand sizes"],
    ["PCB Board", "Control & display"],
    ["Door Lock", "Front-load interlocks"],
    ["Timer & Switch", "Wash & spin timers"],
    ["Pulsator & Shaft", "Gearbox & clutch"],
  ],
  microwave: [
    ["Magnetron", "Solo & convection"],
    ["HV Capacitor", "All ratings"],
    ["HV Diode", "Standard fit"],
    ["Turntable Motor", "Synchronous"],
    ["Glass Plate", "All diameters"],
    ["Door Switch", "Interlock sets"],
    ["Control Board", "Touch & dial"],
    ["Fuse & Thermal Cutout", "Safety parts"],
  ],
  fridge: [
    ["Compressor", "Reciprocating & inverter"],
    ["Thermostat", "Mechanical & digital"],
    ["Door Gasket", "All sizes, magnetic"],
    ["Defrost Timer", "Frost-free models"],
    ["Relay & OLP", "Starter kits"],
    ["Fan Motor", "Evaporator & condenser"],
    ["PCB Board", "Main & inverter boards"],
    ["Gas & Filter Drier", "R134a, R600a"],
  ],
  ac: [
    ["Compressor", "Split & window"],
    ["Run Capacitor", "Single & dual"],
    ["Fan Motor", "Indoor & outdoor"],
    ["PCB & Remote", "Universal & OEM"],
    ["Refrigerant Gas", "R22, R32, R410A"],
    ["Contactor", "Outdoor units"],
    ["Blower Wheel", "Cross-flow"],
    ["Copper Pipe & Kit", "Installation parts"],
  ],
} as const;

export type Appliance = keyof typeof parts;
