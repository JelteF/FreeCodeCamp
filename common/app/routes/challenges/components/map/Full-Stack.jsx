import React, { PropTypes } from 'react';
import PureComponent from 'react-pure-render/component';
import dedent from 'dedent';
import SuperBlock from './Super-Block.jsx';

const lockMessage = dedent`
  To qualify for these nonprofit projects,
  you must first earn all three foundational certifications:
  Front End, Data Visualization, and Back End
`.replace(/[\n]/g, ' ');

const nonprofitProjects = {
  title: 'Nonprofit Projects',
  time: '800 Hours',
  challenges: [
    {
      title: 'Greenfield Nonprofit Project #1',
      dashedName: 'greenfield-1',
      isLocked: true,
      isRequired: true
    },
    {
      title: 'Greenfield Nonprofit Project #2',
      dashedName: 'greenfield-2',
      isLocked: true,
      isRequired: true
    },
    {
      title: 'Legacy Code Nonprofit Project #1',
      dashedName: 'legacy-1',
      isLocked: true,
      isRequired: true
    },
    {
      title: 'Legacy Code Nonprofit Project #2',
      dashedName: 'legacy-2',
      isLocked: true,
      isRequired: true
    },
    {
      title: 'Claim your Full Stack Development Certification',
      dashedName: 'claim-full-stack',
      isLocked: true
    }
  ]
};

const title = 'Full Stack Development Certification';
const dashedName = 'full-stack';
export default class FullStack extends PureComponent {
  static displayName = 'FullStack';
  static propTypes = {
    mapUi: PropTypes.object,
    toggleThisPanel: PropTypes.func
  };
  render() {
    const { mapUi, toggleThisPanel } = this.props;
    return (
      <SuperBlock
        blocks={ [ nonprofitProjects ] }
        dashedName={ dashedName }
        mapUi={ mapUi }
        message={ lockMessage }
        title={ title }
        toggleThisPanel={ toggleThisPanel }
      />
    );
  }
}
