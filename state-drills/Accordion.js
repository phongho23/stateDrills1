import React, { Component } from 'react'

class Accordion extends React.Component {

    static defaultProps = { sections: [] };

    state = {
        activeSectionIndex: null
    }


    handleButtonClick = (sectionIndex) => {
        this.setState({ activeSectionIndex: sectionIndex} )
    }

    renderInfo(section, index, activeSectionIndex) {
        return (
            <li>
                <button type='button' onClick={() => this.handleButtonClick(index)}>
                {section.title}
                </button>
                {(activeSectionIndex === index) && <p>{section.content}</p>} 
            </li>
        )}


    render() {
        const { activeSectionIndex } = this.state
        const { sections } = this.props
        return (
            <ul>
                {sections.map((section, index) => 
                    this.renderInfo(section, index, activeSectionIndex)
                )}
            </ul>
        )
    }
}




export default Accordion;