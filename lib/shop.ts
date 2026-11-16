export const shop = {
  phoneDisplay: "+91 99886 92928",
  phoneTel: "+919988692928",
  whatsappNumber: "919988692928",
};

export function whatsappHref(text: string) {
  return `https://wa.me/${shop.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export function partEnquiryMessage(applianceLabel: string, partName: string) {
  return [
    "Hi Maurya Refrigeration,",
    `Part: ${partName}`,
    `Appliance: ${applianceLabel}`,
    "Brand: ",
    "Model: ",
  ].join("\n");
}

export function generalEnquiryMessage() {
  return [
    "Hi Maurya Refrigeration,",
    "I need a spare part.",
    "Appliance: ",
    "Brand: ",
    "Model: ",
  ].join("\n");
}

export function enquiryMessage(input: {
  name: string;
  applianceLabel: string;
  partName: string;
  brand: string;
  model: string;
}) {
  const lines = ["Hi Maurya Refrigeration,"];
  const name = input.name.trim();

  if (name) {
    lines.push(`My name is ${name}.`);
  }

  lines.push(
    `Part: ${input.partName.trim()}`,
    `Appliance: ${input.applianceLabel}`,
    `Brand: ${input.brand.trim()}`,
    `Model: ${input.model.trim()}`,
  );

  return lines.join("\n");
}
