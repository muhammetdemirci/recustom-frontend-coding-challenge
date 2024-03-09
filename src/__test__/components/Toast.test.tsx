import { render, screen } from '@testing-library/react';
import Toast, { ToastType } from "../../stories/Toast";

const message = 'Attention';
const description = 'Oh snap, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content. Be sure to use margin utilities to keep things nice and tidy.';

function setup(jsx: JSX.Element) {
  return {
    ...render(jsx),
  };
}

describe('ToastComponent', () => {
  it('should render with message', () => {
    
    setup(<Toast description={description} type={ToastType.DANGER} message={message} />);
    expect(screen.getByText(message)).toBeInTheDocument();
  })

  it('should render with cta', async () => {
    const message = 'Toast component is rendered Successfully';
    setup(<Toast description={description} type={ToastType.SUCCESS} message={message} cta={true} />);

    const content = screen.getByTestId('cta-type');
    expect(content).toHaveClass(`cta cta-${ToastType.SUCCESS}`);
  })
});