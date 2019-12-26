import * as React from 'react';
import style from './styles.css';

export type Props = { text: string };

export default class ExampleComponent extends React.Component<Props> {
  render() {
    const { text } = this.props;

    return <div className={style.demo}>Hello {text}</div>;
  }
}
