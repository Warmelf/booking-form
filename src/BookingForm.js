import React, {Component} from 'react';
import 'antd/dist/antd.css';
import { Form, Select, InputNumber, Button  } from 'antd';
const { Option } = Select;
let selectedCountry = 'default';


class BookingForm extends Component {
    state = {
        countryVal: '',
        cityVal: '',
        countriesWithTowns: {
            Italy: ['Рим', 'Флоренция', 'Неаполь', 'Милан', 'Турин'], 
            France: ['Париж', 'Орлеан', 'Марсель', 'Тулуза'],
            Germany: ['Берлин', 'Гамбург', 'Бремен'],
            Spain: ['Мадрид', 'Валенсия', 'Севилья', 'Малага'],
            default: []
        },
        isInputDays: false,
        isButtonActive: false
    }
    
    handleChangeCountry = (value) => {
        this.setState({
            countryVal: value
        });
        const countries = Object.keys(this.state.countriesWithTowns);
        selectedCountry = countries.find((country) => country === value);
    }

    handleChangeCity = (value) => {
        this.setState({
            cityVal: value,
            isInputDays: true
        });
    }
    onChange = (value) => {
        this.setState({
            isButtonActive: true
        });
    }
    render() {
        return (
        <div>
            <Form>
                <Select defaultValue="Страна" style={{ width: 120 }} onChange={this.handleChangeCountry} className="mg">
                    <Option value="Italy">Италия</Option>
                    <Option value="France">Франция</Option>
                    <Option value="Germany">Германия</Option>
                    <Option value="Spain">Испания</Option>
                </Select>
                <Select defaultValue="Город" style={{ width: 120 }} onChange={this.handleChangeCity}>
                    {this.state.countriesWithTowns[selectedCountry].map(element => (
                        <Option value={element}>{element}</Option>
                    ))}
                </Select>
                <Form.Item label="Количество дней:" className={`none ${this.state.isInputDays ? 'appear' : null}`}>
                    <InputNumber min={1} max={100} onChange={this.onChange} />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" disabled={this.state.isButtonActive ? null : 'disabled'}>Отправить заявку</Button>
                </Form.Item>
            </Form>
        </div>
        );
    }
}

export default BookingForm;