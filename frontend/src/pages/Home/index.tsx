import React from 'react'
import { FeatureCard } from '../../components/FeatureCard'
import { Introduction } from '../../components/Introduction'
import './index.css'


export function Home() {
    return (
        <div className='home-container'>
            <div style={{ width: '45%' }}>
                <Introduction />
            </div>
            <div style={{ width: '45%'}}>
                <FeatureCard />
            </div>
        </div>
    )
}

