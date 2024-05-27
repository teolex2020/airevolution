'use client'
import React from 'react'
import { AlignRight, X } from 'lucide-react'
import { useSelector, useDispatch } from 'react-redux'
import { PopupMenu } from '../../../store/features/counterSlice'
const MobileButton = () => {
	const dispatch = useDispatch()
	const popupmenu = useSelector((state) => state.counter.popupmenu)

	const popup = () => {
		dispatch(PopupMenu(popupmenu))
    
	}

 

	return (
		<div className={` w-11 h-11 flex  relative justify-center items-center   `} onClick= {()=>popup()}>
      {popupmenu ? <X className='w-8 h-8' /> : <AlignRight className='w-10 h-10' />}
		
		</div>
	)
}

export default MobileButton
