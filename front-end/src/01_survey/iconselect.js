import React, { Component } from 'react';
import { RaisedButton, Checkbox } from 'material-ui';
import HardwareVideogameAsset from 'material-ui/svg-icons/hardware/videogame-asset';


const Icon = ({item}) => {
  if (item.icon === 'coffee') {
    return (
      <HardwareVideogameAsset style={styles.iconStyles}/>
    )
  }
  else if (item.icon === 'meetup') {
    return (
      <HardwareVideogameAsset style={styles.iconStyles}/>
    )
  }
  else if (item.icon === 'club') {
    return (
      <HardwareVideogameAsset style={styles.iconStyles}/>
    )
  }
  else if (item.icon === 'boardgames') {
    return (
      <HardwareVideogameAsset style={styles.iconStyles}/>
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
    console.log('it is ', this.props.id,  item);
    this.props.registerSelection(this.props.id, item);
    this.setState({ selection: item });
    // if (isChecked) {
    //   this.setState({ selection: item });
    // }
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
    border: '1px solid blue',
    backgroundColor:'#81ffe7',
    padding:12,
    display: 'flex',
    alignItems: 'center',
    flexDirection :'column',
    justifyContent: 'flex-end'
  },
  selected: {
    backgroundColor: 'red'
  },
  iconStyles: {
    height: 100,
    width: 100,
    color: '#FFF'
  }
};