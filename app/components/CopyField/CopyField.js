'use client';
import style from "./CopyField.module.scss";
import { useState } from 'react';
import { Copy, Check } from 'react-feather';

const CopyField = ({value}) => {
  const [isСopied, setСopied] = useState(false);
  const copyText = (entryText) => {
    navigator.clipboard.writeText(entryText);
    setСopied(true);

    setTimeout(() => {
      setСopied(false);
    }, 1500)
  }

  return (
    <div className={style["field-copy"] + ` button`}>
      <input value={!isСopied ? value : "cкопировано"} className={style.input} type="text" readOnly title="Скопировать" onClick={() => copyText(value)}/>
      {!isСopied 
        ? <Copy size={20} className={style.icon}/>
        : <Check size={20} className={style.icon}/>
      }
    </div>
  )
}

export default CopyField
