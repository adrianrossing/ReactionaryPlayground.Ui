import * as React from 'react';
import { TodoModel } from 'app/models';

export const FILTER_TITLES = {
    [TodoModel.Filter.SHOW_ALL]: 'All',
    [TodoModel.Filter.SHOW_ACTIVE]: 'Active',
    [TodoModel.Filter.SHOW_COMPLETED]: 'Completed'
  };

  export namespace Nav {
    export interface Props {
      filter: TodoModel.Filter;
      onClickFilter: (filter: TodoModel.Filter) => any;
    }
  }

  export class Nav extends React.Component<Nav.Props> {
    renderFilterLink(filter: TodoModel.Filter): JSX.Element {
      const { onClickFilter } = this.props;
  
      return (
        <a
          style={{ cursor: 'pointer'}}
          onClick={() => onClickFilter(filter)}
          children={FILTER_TITLES[filter]}
        />
      );
    }


    render() {
      return (
        <footer>
        <ul>
          {(Object.keys(TodoModel.Filter) as (keyof typeof TodoModel.Filter)[]).map((key) => (
            <li key={key} children={this.renderFilterLink(TodoModel.Filter[key])} />
          ))}
        </ul>        
        </footer>
      );
    }
  }

