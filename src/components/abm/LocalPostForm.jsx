import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { confirmAlert } from 'react-confirm-alert';
import Post from '../posts/Post';
import TextField from '../commons/TextField';

export default function LocalPostForm({
  title,
  description,
  author,
  content,
  publishedAt,
  urlToImage,
  onSave,
  onRemove,
}) {
  const [fileField, setFileField] = useState(urlToImage);
  const [fileName, setFileName] = useState('Select a image');
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: { title, description, content } });

  /**
   * Handles de submit event of the form
   * @param {*} data
   */
  const onSubmit = (data) => {
    const now = new Date();
    const formData = {
      ...data,
      urlToImage: fileField,
      author: 'WEB',
      publishedAt: now.toISOString(),
    };
    confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            onSave(formData);
          },
        },
        {
          label: 'No',
          onClick: () => {},
        },
      ],
    });
  };

  const handleRemove = () => {
    confirmAlert({
      title: 'Confirm to remove',
      message: 'Are you sure to remove this post?.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => onRemove(),
        },
        {
          label: 'No',
          onClick: () => {},
        },
      ],
    });
  };

  /**
   * Transform de current file to a base64 representation
   * @param {*} file
   */
  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };
  /**
   * Handles the file upload event of the form.
   * @param {*} e
   */
  const imageUpload = (e) => {
    const file = e.target.files[0];
    setFileName(file.name);
    getBase64(file).then((base64) => {
      setFileField(base64);
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="buttons has-addons is-right">
        <button
          className="button is-danger"
          type="button"
          onClick={(evt) => handleRemove(evt)}
        >
          <i className="fas fa-trash" />
        </button>
      </div>

      <div className="columns">
        <div className="column">
          <TextField
            title="Title"
            defaultValue={title}
            {...register('title', { required: true })}
            onChange={(evt) => setValue('title', evt.target.value)}
            error={errors.title}
          />
          <TextField
            title="Description"
            error={errors.description}
            type="textarea"
            defaultValue={description}
            {...register('description', { required: true })}
            onChange={(evt) => {
              setValue('description', evt.target.value);
            }}
          />
          <TextField
            title="Content"
            error={errors.content}
            type="textarea"
            defaultValue={content}
            {...register('content', { required: true })}
            onChange={(evt) => setValue('content', evt.target.value)}
          />
        </div>
        <div className="column has-image">
          {fileField && <img alt="" src={fileField} />}
          {!fileField && <div className="img-empty">NO IMAGE</div>}
          <div className="file is-right has-name">
            <label className="file-label">
              <input
                type="file"
                accept="image/*"
                className="file-input"
                {...register('urlToImage', { required: false })}
                onChange={imageUpload}
              />
              <span className="file-cta">
                <span className="file-icon">
                  <i className="fas fa-upload" />
                </span>
                <span className="file-label">Choose a file…</span>
              </span>
              <span className="file-name">{fileName}</span>
            </label>
          </div>
        </div>
      </div>
      <hr />
      <button className="button is-primary" type="submit">
        <i className="fas fa-save" />
        &nbsp; Save
      </button>
    </form>
  );
}
