'use-client'

import { faAddressBook, faEnvelope, faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './ContactCard.module.css';
import TextareaAutosize from 'react-textarea-autosize';
import dynamic from 'next/dynamic'
import { Button } from '../Button';

export function ContactCard() {
    return (
      <div className='bg-white rounded-xl shadow-xl p-6 font-rubik flex flex-col md:flex-row gap-4 md:gap-12'>
        <div className='basis-3/4 lg:basis-full'>
          <h2 className='text-xl font-notoSans font-semibold mb-2 '>Let's discuss your project</h2>
          <p className='text-secondary-gray-75 mb-4'>There are many variations of passages of Lorem Ipsu available. but the majority have suffered alte.</p>
          <div className='flex flex-col gap-2'>
            <div className='bg-white rounded-xl shadow-lg p-6 flex gap-3'>
              <div className='rounded-1sm bg-primary-red p-3 inline-flex items-center'>
                <FontAwesomeIcon icon={faLocationDot} className='text-white w-6  fa-lg' />
              </div>
              <div>
                <div>Location:</div>
                <div>Birmingham, AL</div>
              </div>
            </div>
            <div className='p-6 flex gap-3'>
              <div className='rounded-1sm bg-secondary-red/10 p-3 inline-flex items-center'>
                <FontAwesomeIcon icon={faEnvelope} className='text-primary-red w-6 fa-lg' />
              </div>
              <div>
                <div>Email:</div>
                <div>kvo189@gmail.com</div>
              </div>
            </div>
            <div className='p-6 flex gap-3'>
              <div className='rounded-1sm bg-secondary-red/10 p-3 inline-flex items-center'>
                <FontAwesomeIcon icon={faAddressBook} className='text-primary-red w-6 fa-lg' />
              </div>
              <div>
                <div>Phone:</div>
                <div>714-622-0624</div>
              </div>
            </div>
          </div>
        </div>
  
        <form action='' className='flex flex-col gap-6 w-full'>
          <div className={`${styles.inputControl}`}>
            <input id='input-name' className={`${styles.formInput}`} type='text' name='name' aria-label='Name' placeholder=' ' />
            <label htmlFor='input-name'>Name*</label>
          </div>
          <div className={`${styles.inputControl}`}>
            <input id='input-subject' className={`${styles.formInput}`} type='text' name='subject' aria-label='subject' placeholder=' ' />
            <label htmlFor='input-subject'>Subject*</label>
          </div>
          <div className={`${styles.inputControl}`}>
            <TextareaAutosize minRows={1} id='input-message' className={`${styles.formInput}`} name='message' aria-label='message' placeholder=' ' /> 
            <label htmlFor='input-message'>Message*</label>
          </div>

          <Button icon={faPaperPlane} text="submit" className='mt-4'></Button>
        </form>
      </div>
    );
  }