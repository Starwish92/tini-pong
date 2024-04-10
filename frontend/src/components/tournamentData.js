// tournamentData.js

import AbstractComponent from "./AbstractComponent.js";
import FetchModule from "../utils/fetchmodule.js";
import {BACKEND_URL} from "../index.js";

export default class extends AbstractComponent {
    constructor() {
        super();
        this.setTitle("Tournament Data");
    }

    async getHtml() {
        return `
        <style>
        .b {
            max-width: 800px;
            margin: 0 auto;
            margin-bottom: 30px;
        }
        
        .title {
            text-align: center;
            color: brown;
            margin-bottom: 10px;
        }
        
        .timestemp {
            margin-top: 45px;
            text-align: center;
            max-width: 200px;
            font-weight:900;
        }
        
        .tdataBox{
            border: 2px solid #4D37C6;
            border-radius: 0.4rem;
            margin: 5px;
            border-width: 5px;
        }

        .game {
            /* border-bottom: 1px dotted #7c798d; */
            margin: 5px;
            height: 30px;
        }
        
        .textAlign {
            font-size: large;
            text-align:center;
            font-weight: bolder;
        }
        .winner {
            color: red;
        }

        </style>
        
        <body>
        
        <div class="container">

        <div class="b">
            <ul class="tdataBox list-group d-flex justify-content-between">
                <div class="row">
                    <div class="col-3">
                    <div class="align-items-center timestemp noto-sans">2024.01.01 13:42</div>
                    </div>
                    <div class="col-9">
                        <div class="game justify-content-between align-items-center my-2 row">
                                <span class="textAlign col-3 game-rank">1st</span>
                                <span class="textAlign col game-player">youngjpa</span>
                                <span class="textAlign col-4 game-score">5 : 3</span>
                                <span class="textAlign col game-opponent">asdf</span>
                        </div>
                        <div class="game justify-content-between align-items-center my-2 row">
                                <span class="textAlign col-3 game-rank">2st</span>
                                <span class="textAlign col game-player">youngjpa</span>
                                <span class="textAlign col-4 game-score">5 : 3</span>
                                <span class="textAlign col game-opponent">asdf</span>
                        </div>
                        <div class="game justify-content-between align-items-center my-2 row">
                                <span class="textAlign col-3 game-rank">Final</span>
                                <span class="textAlign col game-player">youngjpa</span>
                                <span class="textAlign col-4 game-score">5 : 3</span>
                                <span class="textAlign col game-opponent">asdf</span>
                        </div>
                    </div>
                </div>
            </ul>
            <ul class="tdataBox list-group d-flex justify-content-between">
                <div class="row">
                    <div class="col-3">
                    <div class="align-items-center timestemp">2024.01.01 13:42</div>
                    </div>
                    <div class="col-9">
                        <div class="justify-content-between align-items-center my-2">
                            <div class="row">
                                <span class="game col-3 game-rank">1st</span>
                                <span class="game col game-player">youngjpa</span>
                                <span class="game col-4 game-score">5 : 3</span>
                                <span class="game col game-opponent">asdf</span>
                            </div>
                        </div>
                        <div class="justify-content-between align-items-center my-2">
                            <div class="row">
                                <span class="game col-3 game-rank">2st</span>
                                <span class="game col game-player">youngjpa</span>
                                <span class="game col-4 game-score">5 : 3</span>
                                <span class="game col game-opponent">asdf</span>
                            </div>
                        </div>
                        <div class="justify-content-between align-items-center my-2">
                            <div class="row">
                                <span class="game col-3 game-rank">Final</span>
                                <span class="game col game-player">youngjpa</span>
                                <span class="game col-4 game-score">5 : 3</span>
                                <span class="game col game-opponent">asdf</span>
                            </div>
                        </div>
                    </div>
                </div>
            </ul>
        </div>

    
    
    
    
    

        <table class="table b">
        <thead>
        <tr>
        <th scope="col">Time Stemp</th>
        <th scope="col">Game 1</th>
        <th scope="col">Game 2</th>
        <th scope="col">Final</th>
        </tr>
        </thead>
        <tbody id="tournamentData">
        <!-- JavaScript로 생성될 내용이 여기에 들어갈 것입니다. -->
        </tbody>
        </table>
        </div>
        
        <div class="container">
        <div class="text-end" id="btn">
        <button type="button" class="btn btn-outline-dark" id="goBackButton">돌아가기</button>
        </div>
        <script src="tournamentData.js"></script>
        </div>
        
        </body>
		`;
    }

    populateCardData() {
        // 카드 데이터를 채우는 함수
        // 이 부분에서 필요한 HTML 코드를 동적으로 생성하여 반환
        // 예를 들어:
        let cardDataHtml = `
            <div class="card b">
                <div class="card-header">
                    <h1 class="display-7 title">Card Data</h1>
                </div>
                <!-- 추가적인 HTML 코드 추가 -->
                <div class="card-body">
                    <!-- 카드 내용 -->
                    <p>Some additional information</p>
                </div>
            </div>
        `;
        return cardDataHtml;
    }


    // 토너먼트 데이터를 표에 채우는 함수
    populateTable(data) {
        let tbody = document.getElementById("tournamentData");
        data.tournamentLog.forEach(function (tournament) {
            let tr = document.createElement("tr");
            // Timestamp 추가
            let tdTimestamp = document.createElement("td");
            let timestamp = new Date(tournament.tournament[0].timestamp * 1000);
            let options = {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit'
            };
            let formattedTimestamp = timestamp.toLocaleDateString('en-GB', options).replace(/\//g, '.').replace(",", "");
            tdTimestamp.textContent = formattedTimestamp;
            tr.appendChild(tdTimestamp);

            // 플레이어 데이터 추가
            for (let i = 1; i < tournament.tournament.length; i++) {
                let tdPlayer = document.createElement("td");
                let playerA = tournament.tournament[i].playerA.name + " " + tournament.tournament[i].playerA.score + " " + (tournament.tournament[i].playerA.score > tournament.tournament[i].playerB.score ? "W" : "L");
                let playerB = tournament.tournament[i].playerB.name + " " + tournament.tournament[i].playerB.score + " " + (tournament.tournament[i].playerB.score > tournament.tournament[i].playerA.score ? "W" : "L");
                tdPlayer.innerHTML = `${playerA}<br>${playerB}`;
                tr.appendChild(tdPlayer);
            }

            // 행 추가
            tbody.appendChild(tr);
        });
    }

    // 페이지가 로드될 때 테이블을 채우도록 호출
    goBack() {
        window.history.back();
    }

    handleRoute() {

        const queryString = location.search;

        (async function (callback) {
            try {
                const fetchModule = new FetchModule();
                const response = await fetchModule.request(new Request(`${BACKEND_URL}/dashboard${queryString}`, {
                    method: 'GET',
                    credentials: "include"
                }));
                if (response.ok) {
                    const data = await response.json();
                    callback(data);
                    // this.populateTable(data);
                }
                else
                    throw new Error(response.statusText);
            } catch (error) {
                console.log(error.message);
            }
        })(this.populateTable);

        const goBackBtn = document.querySelector("#goBackButton");
        goBackBtn.addEventListener("click", event => {
            this.goBack();
        });
    }
}
