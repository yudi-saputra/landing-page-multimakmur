import {
  Smartphone,
  Gamepad2,
  Receipt,
  Wallet,
  Award,
  Zap,
  Headset,
  Network,
  Building2,
  Users,
  Plug,
  type LucideProps,
} from "lucide-react";

const icons = {
  Smartphone,
  Gamepad2,
  Receipt,
  Wallet,
  Award,
  Zap,
  Headset,
  Network,
  Building2,
  Users,
  Plug,
};

export type IconName = keyof typeof icons;

export function Icon({
  name,
  ...props
}: { name: IconName } & LucideProps) {
  const Component = icons[name];
  return <Component {...props} />;
}
