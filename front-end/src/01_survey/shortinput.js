import React, { Component } from 'react';
import { TextField, Checkbox } from 'material-ui';
import HardwareVideogameAsset from 'material-ui/svg-icons/hardware/videogame-asset';

// const Icon = ({item}) => {
//   if (item.icon === 'coffee') {
//     return (
//       <HardwareVideogameAsset style={styles.iconStyles}/>
//     )
//   }
//   else if (item.icon === 'meetup') {
//     return (
//       <HardwareVideogameAsset style={styles.iconStyles}/>
//     )
//   }
//   else if (item.icon === 'club') {
//     return (
//       <HardwareVideogameAsset style={styles.iconStyles}/>
//     )
//   }
//   else if (item.icon === 'boardgames') {
//     return (
//       <HardwareVideogameAsset style={styles.iconStyles}/>
//     )
//   }
// };

export default class ShortInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      selection: {id: -1, text: "", icon: ''}
    };
    this.onClick = this.onClick.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }
  onClick(item, isChecked) {
    if (isChecked) {
      this.setState({ selection: item });
      this.props.registerSelection(this.props.id);
    }
  }
  onSelect() {
    this.props.onSelectQuestion(this.props.id);
  }

  render() {
    return (
      <div style={styles.container} onClick={() => this.onSelect(this.props.id)}>
        <TextField
          id={this.props.id + "123123"}
          style={styles.input}
          onChange={(e, text) => this.props.registerSelection(this.props.id, {text})}
        />
      </div>
    )
  }
}

const styles = {
  container: {
    display: 'flex',
    flexFlow: 'row',
    width: '30%',
    height: 60
  },

  input: {
    width: 400
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