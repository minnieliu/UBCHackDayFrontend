import React, { Component } from 'react';
import { RaisedButton, Checkbox } from 'material-ui';
import Accessibility from 'material-ui/svg-icons/action/accessibility';
import HardwareVideogameAsset from 'material-ui/svg-icons/hardware/videogame-asset';
import LocalCafe from 'material-ui/svg-icons/maps/local-cafe';
import Casino from 'material-ui/svg-icons/places/casino';
import Group from 'material-ui/svg-icons/social/group';
import School from 'material-ui/svg-icons/social/school';
import GTranslate from 'material-ui/svg-icons/action/g-translate';


const Icon = ({item}) => {
  if (item.icon === 'coffee') {
    return (
      <LocalCafe style={styles.iconStyles}/>
    )
  }
  else if (item.icon === 'meetup') {
    return (
      <Group style={styles.iconStyles}/>
    )
  }
  else if (item.icon === 'club') {
    return (
      <HardwareVideogameAsset style={styles.iconStyles}/>
    )
  }
  else if (item.icon === 'boardgames') {
    return (
      <Casino style={styles.iconStyles}/>
    )
  }
  else if (item.icon === 'study') {
    return (
      <School style={styles.iconStyles}/>
    )
  }
};


export default class IconSelect extends Component {
  constructor(props){
    super(props);
    this.state = {
      selection: {id: -1, text: "", icon: ''}
    };
    this.onClick = this.onClick.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }
  onClick(item, isChecked) {
    this.props.registerSelection(this.props.id, item);
    this.setState({ selection: item });
  }
  onSelect() {
    this.props.onSelectQuestion(this.props.id);
  }

  render() {
    return (
      <div style={styles.container} onClick={() => this.onSelect(this.props.id)}>
        {this.props.answers.map((item) => (
          <div
            key={item.text}
            style={{...styles.selectionContainer, ...(this.state.selection.id === item.id) && styles.selected}}
            onClick={() => this.onClick(item, !(this.state.selection.id === item.id))}>
            <Icon
              item={item}
              isSelected={this.state.selection.id === item.id}
            />
            <p style={{color: '#FFF', textAlign:'center'}}>{item.text}</p>
          </div>
        ))}
      </div>
    )
  }
}

const styles = {
  container: {
    display: 'flex',
    flexFlow: 'row',
    width: '70%',
    height: 175
  },

  selectionContainer: {
    margin: 5,
    backgroundColor:'#f37f1e',
    padding:12,
    display: 'flex',
    alignItems: 'center',
    flexDirection :'column',
    justifyContent: 'flex-end',
    borderRadius: 5,
    boxShadow: '0 0 5px grey'
  },
  selected: {
    backgroundColor: '#ffa859'
  },
  iconStyles: {
    height: 100,
    width: 100,
    color: '#FFF'
  }
};