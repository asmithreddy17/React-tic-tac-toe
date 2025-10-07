body {
  font-family: Arial, sans-serif;
  background-color: #f7f7f7;
  text-align: center;
  margin-top: 40px;
}

.app h1 {
  color: #222;
  margin-bottom: 20px;
}

.square {
  background: #fff;
  border: 2px solid #999;
  float: left;
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;
  height: 60px;
  margin: 4px;
  padding: 0;
  text-align: center;
  width: 60px;
  cursor: pointer;
}

.board-row:after {
  clear: both;
  content: "";
  display: table;
}

.game {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
}

.game-info {
  margin-left: 20px;
  text-align: left;
}
