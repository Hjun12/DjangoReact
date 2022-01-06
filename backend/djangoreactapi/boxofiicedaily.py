# -*- coding: utf-8 -*-
import json
import urllib.request as ul
from datetime import datetime, timedelta
import matplotlib.pyplot as plt
import pandas as pd
import pymysql
import requests
from matplotlib import pyplot as plt
from pandas import DataFrame
from prettytable import PrettyTable
from prettytable.prettytable import HEADER
from sqlalchemy import create_engine
from tabulate import tabulate

juso_db = pymysql.connect(
    user='react',
    passwd='react',
    host='127.0.0.1',
    db='react',
    charset='utf8'
)


cursor = juso_db.cursor(pymysql.cursors.DictCursor)

#날짜 값 받아와야함
moviedate = 20211230
# moviedate = input("20211230")
#데이터가 있는지 검사
sql = "SELECT * FROM `box_box` WHERE date = '%s';"
cursor.execute(sql, moviedate)
result = cursor.fetchall()


if len(result) != 0:
    print("DB에 데이터가 있습니다.")

elif len(result) == 0:
    print("DB에 데이터가 없습니다. 데이터를 받아옵니다.")
    moviedatea = str(moviedate)
    url = "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=c1035a0cccad88e177c033a3fc27ccc0&targetDt="+ moviedatea
    r = requests.get(url)
    # 접속에 실패한 경우(status_code가 200이 아닌경우는 모두 에러 간주)
    if r.status_code != 200:
     # 에러코드와 에러메시지 출력
        print('[%d Error] %s' % (r.status_code, r.reason))
        # 프로그램 강제 종료
        quit()

    # 가져온 결과를 딕셔너리로 변환
    r.encoding = 'utf-8'
    result = json.loads(r.text)

    num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    sqldata = []
    # 1위부터 10위까지 tuple 타입으로 필요한 요소만 담기
    for i in num:
        sqldata.append([(result['boxOfficeResult']['showRange'])[0:8], result['boxOfficeResult']['dailyBoxOfficeList'][i]['rank'], result['boxOfficeResult']['dailyBoxOfficeList'][i]['movieNm'], result['boxOfficeResult']['dailyBoxOfficeList'][i]['openDt'], result['boxOfficeResult']['dailyBoxOfficeList'][i]['salesAmt'], result['boxOfficeResult']['dailyBoxOfficeList'][i]['salesAcc'], result['boxOfficeResult']['dailyBoxOfficeList'][i]['audiCnt'], result['boxOfficeResult']['dailyBoxOfficeList'][i]['audiAcc']])


    insertsql="INSERT INTO `box_box` (date,rank,movieNm,openDT,salesAmt,salesAcc,audiCnt,audiAcc) VALUES (%s,%s,%s,%s,%s,%s,%s,%s);"

    # tuple 형태에 담긴만큼 sql문 실행하기
    cursor.executemany(insertsql, sqldata)

    juso_db.commit()
    
cursor.execute(sql, moviedate)
result = cursor.fetchall()
print(result)
