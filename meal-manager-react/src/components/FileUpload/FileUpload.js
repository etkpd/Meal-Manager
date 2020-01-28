import React, { Component } from 'react';
import stylesFileUpload from './FileUpload.module.scss'
//eslint-disable-next-line
import api from "../../api"

class FileUpload extends Component {
  state={
    image:'',
    localImage:''
  }

  handleChange = (e) => {
    const {field, form} = this.props;
    console.log(e.target.files)
    const file  =  e.target.files[0];
    console.log(file)    
    const data = new FormData()
    data.append('file', file)

    this.setState({localImage: URL.createObjectURL(file)}, ()=>{
      api.recipe.uploadFileByServer(data).then((res)=>{
        this.setState({
          image: res.data.highres,
          localImage:''
        });
        form.setFieldValue(field.name, res.data.highres);
        form.setFieldValue(this.props.namelowResImage, res.data.thumb);
      })
    }) 

/*     this.setState({localImage: URL.createObjectURL(file)}, ()=>{
      api.recipe.uploadFileUsingTestRoute(data).then((res)=>{
        this.setState({
          image: res.data.highres,
          localImage:''
        });
        form.setFieldValue(field.name, res.data.highres);
        form.setFieldValue(this.props.namelowResImage, res.data.thumb);
      })
    }) */
  };

  render() {
    return (
      <>
        {this.state.image !== '' ? 
            <img  
              className={stylesFileUpload.image}
              src={this.state.image} 
              alt="Upload Preview" 
              height='400'/>
          :<>
            {this.state.localImage === '' 
              ? <div className={stylesFileUpload.uploadArea}>
                  <input type="file" onChange={this.handleChange} className={stylesFileUpload.FileInput}></input>
                </div>
              : <img  
                  className={stylesFileUpload.image}
                  src={this.state.localImage} 
                  alt="Upload Preview" 
                  height='400'/>} 
          </>
        }
      </>
    );
  }
}

export default FileUpload;