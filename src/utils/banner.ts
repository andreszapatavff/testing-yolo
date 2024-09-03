import figlet from 'figlet';

export const YOLOBANNER = (input: string) => {
  return figlet.textSync(`YOLO: \n${input}`, {
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 80,
    whitespaceBreak: true,
  });
};
