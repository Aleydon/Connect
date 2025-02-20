import { render } from '@testing-library/react';

import { Input } from '@/components/Input';

describe('Input Component', () => {
  it('should render', () => {
    const input = render(<Input />);
    expect(input.container.querySelector('svg')).toBeInTheDocument();
  });
});
