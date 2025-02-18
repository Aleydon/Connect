import { ArrowRight, Copy } from 'lucide-react';

import { Button } from '@/components/Button';
import { IconButton } from '@/components/IconButton';
import { Input } from '@/components/Input';

export default function Page() {
  return (
    <main className="flex justify-center items-center">
      <Button>
        Button Component
        <ArrowRight />
      </Button>

      <IconButton>
        <Copy />
      </IconButton>
      <Input />
    </main>
  );
}
