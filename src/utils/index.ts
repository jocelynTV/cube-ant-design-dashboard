import moment from 'moment';

const delay = () => {
  return new Promise((resolve) => setTimeout(resolve, 1000));
};

const dateToFromNow = (date: Date) => {
  return moment(date).fromNow();
};

const dateToFormat = (date: Date, format: string) => {
  return moment(date).format(format);
};

const sizeMemory = (size: number, page = 2) => {
  if (size < 0) {
    return '';
  }
  if (size === 0) {
    return `${0} B`;
  }
  if (size < 1024) {
    return `${size.toFixed(0)} B`;
  }
  if (size >= 1024 && size < 1024 * 1024) {
    return `${(size / 1024).toFixed(page)} KB`;
  }
  if (size >= 1024 * 1024 && size < 1024 * 1024 * 1024) {
    return `${(size / (1024 * 1024)).toFixed(page)} MB`;
  }
  if (size >= 1024 * 1024 * 1024 && size < 1024 * 1024 * 1024 * 1024) {
    return `${(size / (1024 * 1024 * 1024)).toFixed(page)} GB`;
  }
  if (size >= 1024 * 1024 * 1024 * 1024) {
    return `${(size / (1024 * 1024 * 1024 * 1024)).toFixed(page)} TB`;
  }
  return '';
};

export { delay, dateToFromNow, dateToFormat, sizeMemory };
