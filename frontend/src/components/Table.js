import React, { Component } from 'react';
import axios from "axios";

class table extends Component {
    constructor(props) {
        super(props);

        this.state = {
            responseFPList: '',
            append_FPList: '',
        }
    }

    componentDidMount() {
        this.callFloatPopulListApi()
    }

    callFloatPopulListApi = async () => {
            axios.get('/boxapi/', {
            })
            .then( response => {
                console.log(response.data)
                try {
                    this.setState({ responseFPList: response });
                    this.setState({ append_FPList: this.FloatPopulListAppend() });
                } catch (error) {
                    alert(error)
                }
            })
            .catch( error => {alert(error);return false;} );
    }

    FloatPopulListAppend = () => {
        let result = []
        var FPList = this.state.responseFPList.data
        var jsonString = JSON.stringify(FPList)
        jsonString = jsonString.replace(/\(1시간단위\)/g, '')
        jsonString = jsonString.replace(/\(10세단위\)/g, '')
        var json = JSON.parse(jsonString)

        for(let i=0; i<json.length; i++){
            var data = json[i]
            var idx = i+1
            result.push(
                <tr class="hidden_type">
                    <td>{idx}</td>
                    <td>{data.openDT}</td>
                    <td>{data.movieNm}</td>
                </tr>
            )
        }
        return result
    }

    render () {
        return (
            <section>
                <article>
                    <div>
                        <h2>영화 데이터 테스트</h2>
                    </div>
                    <div>
                        <table>
                            <tr>
                                <th>Row</th>
                                <th>일자</th>
                            </tr>
                        </table>	
                        <table>
                            {this.state.append_FPList}
                        </table>
                    </div>
                </article>
            </section>
        );
    }
}

export default table;