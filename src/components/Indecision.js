import AddOption from './AddOption'
import Header from './Header'
import Options from './Options';
import Action from './Action'
import React from 'react';
import Modal from './OptionModal';

class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };

    componentDidMount() {
        const json = localStorage.getItem('options');
        const options = JSON.parse(json);
        if (options) {
            this.setState(() => ({ options }))

        }
    }
    componentDidUpdate(prevState, prevProps) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
        }
    }

    handleDeleteOptions = () => {
        this.setState(() => {
            return {
                options: []
            }
        })
    }
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        })
        )
    }

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum]
        // alert(option)
        this.setState(() => ({
            selectedOption: option
        }))
    }
    handleRemoveSelectedOption = () => {
        this.setState(() => ({
            selectedOption: undefined
        }))
    }

    handleAddOptions = (option) => {

        if (!option) {
            return 'enter valid value to add item'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'already item exists'
        }

        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option)
            }
        })

    }
    render() {
        const title = "Indecision App";
        const subtitle = "Put your life in the hands of computer"
        return (
            <div>
                <Header title={ title } subtitle={ subtitle } />
                <div className="container">
                    <Action hasOption={ this.state.options.length < 0 } handlePick={ this.handlePick } />
                    <div className="widget">

                        <Options options={ this.state.options }
                            handleDeleteOptions={ this.handleDeleteOptions }
                            handleDeleteOption={ this.handleDeleteOption }
                        />
                        <AddOption handleAddOptions={ this.handleAddOptions } />
                    </div>

                </div>

                <Modal
                    selectedOption={ this.state.selectedOption }
                    handleRemoveSelectedOption={ this.handleRemoveSelectedOption }
                />
            </div>
        )
    }
}


export default IndecisionApp;