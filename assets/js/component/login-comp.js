// login.js

// Login 컴포넌트
export const Login = {
  template: `
                     <h3 class="contents-tit">로그인</h3>
                     <div class="login_scont">
                        <form action="process.php" method="post">
                            <!-- 아이디박스 -->
                             <div class="box">
                            <div class="minput">
                                <input type="text" name="mid" id="mid" maxlength="10" placeholder="아이디(이메일)" />
                                <!-- name속성은 서버쪽 사용용도로 작성함(id명과 같은 이름 많이씀) -->
                            </div>
                            <div class="minput">
                                <!-- 비번박스 -->
                                <input type="password" name="mpw" id="mpw" maxlength="10" placeholder="비밀번호" />
                            </div>
                            <!-- 버튼박스 -->
                            <div class="btnbx">
                                <input type="submit" id="sbtn" value="로그인" />
                            </div>
                            <!-- 기타링크 -->
                            <div class="addbx">
                                <span>
                                    <a href="#">아이디가 없으신가요?</a>
                                </span>
                                <span>
                                    <a href="join.html">회원가입 하기</a>
                                </span>
                            </div>
                        </form>
                     </div>
    `,
};

// Join 컴포넌트
export const Join = {
  template: `
    <h2 class="stit">회원가입</h2>
    <!-- 2-3.컨텐츠박스 -->
    <section class="login_scont">
        <form action="process.php" method="post">
            <ul>
                <!-- 1.아이디 -->
                <li>
                    <label class="itit" for="mid"></label>
                    <input type="text" name="mid" id="mid" maxlength="20" placeholder="아이디를 입력해주세요!">
                    <!-- 메시지박스 -->
                    <span class="msg"></span>
                </li>
                <!-- 2.비밀번호 -->
                <li>
                    <label class="itit" for="mpw"></label>
                    <input type="password" name="mpw" id="mpw" maxlength="20" placeholder="비밀번호">
                    <!-- 메시지박스 -->
                    <span class="msg"></span>
                </li>
                <!-- 3.비밀번호확인 -->
                <li>
                    <label class="itit" for="mpw2"></label>
                    <input type="password" name="mpw2" id="mpw2" maxlength="20" placeholder="비밀번호확인">
                    <!-- 메시지박스 -->
                    <span class="msg"></span>
                </li>
                <!-- 4.이름 -->
                <li>
                    <label class="itit" for="mnm"></label>
                    <input type="text" name="mnm" id="mnm" maxlength="20" placeholder="이름을 입력해주세요!">
                    <!-- 메시지박스 -->
                    <span class="msg"></span>
                </li>
                <!-- 5.성별 -->
                <li>
                    <span class="itit">성별　</span>                       
                    <label for="gen1">남성</label>
                    <input type="radio" name="gen" id="gen1">
                    <label for="gen2">여성</label>
                    <input type="radio" name="gen" id="gen2" checked>
                    <!-- 
                        라디오버튼의 name속성을
                        같은 이름으로 쓰면 그룹핑되어서
                        하나만 선택된다!
                        checked 속성은 처음 기본선택옵션임
                        -->
                </li>
                <!-- 6.이메일 -->
                <li>
                    <label class="itit" for="email1"></label>
                    <input type="text" name="email1" id="email1" placeholder="이메일앞주소">
                    <span class="gol">@</span>
                    <select name="seleml" id="seleml">
                        <option value="init">
                            선택해주세요
                        </option>
                        <option value="naver.com">
                            naver.com
                        </option>
                        <option value="daum.net">
                            daum.net
                        </option>
                        <option value="hotmail.com">
                            hotmail.com
                        </option>
                        <option value="hanmail.net">
                            hanmail.net
                        </option>
                        <option value="gmail.com">
                            gmail.com
                        </option>
                        <option value="free">
                            직접입력
                        </option>
                    </select>
                    <!-- 메시지박스 -->
                    <span class="msg"></span>
                </li>
                <!-- 7.이메일 뒷주소 직접입력창 -->
                <li>
                    <label for="email2" class="ee"></label>
                    <input type="text" name="email2" id="email2" placeholder="이메일뒷주소">
                </li>
                <!-- 8.서브밋 버튼 -->
                <li>
                    <input id="btnj" type="submit" value="가입하기">
                </li>
            </ul>
        </form>
    </section>
    `,
};
