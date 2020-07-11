<h3>herolo home assignment</h3> <h2>weather app</h2>
<h4>assumption</h4>
<ul>
    <li>favorite location show the current weather fetched from server and not the data stored on clicking to add favorite item</li>
</ul>
<h2>UI</h2>
<p>my general ui guideline was to keep it solid and clean with minimalist animation</P>
<h2>Code</h2>
<p>my coding guidelines split into two parts</p>
<ul>
    <li><strong>readability</strong> - i tried to set variables and functions names that explain itself without needs of comments</li>
    <li><strong>as easy to maintain as possible</strong> - besides readable code, using of hoc like ThemedContainer givs you idea where to look for to change theming design and WithLoading releases from messing around with loadings and errors. separation into block sections enable to add or remove sections without breaking the ui.</li>
</ul>
<h3>structure</h3>
<ul>
    <li>redux</li>
    <ul>
        <li>actions</li>
        <ul>
            <li>errorsActions</li>
            <ul>
                <li>addNewError - triggers those three actions</li>
                <ul>
                    <li>addErrorObj - error object that contains error message</li>
                    <li>showErrorModalAction - boolean to show modat that contains the error</li>
                    <li>haveErrorAction - boolean if there is an error</li>
                </ul>
            </ul>
            <li>favoriteActions</li>
            <ul>
                <li>addToFavoriteAction - adds favorit to favorites array</li>
                <li>removeFavoriteAction - remove favorit from favorites array</li>
                <li>setFavoriteItem - find if current city exists in favorite items and triggers</li>
                <ul>
                    <li>saveFavoriteItem - save item as favorite item</li>
                </ul>
            </ul>
            <li>themeActions</li>
            <ul>
                <li>setDarkTheme - boolean if theme is dark or not</li>
            </ul>
            <li>weatherDataActions</li>
            <ul>
                <li>saveWeatherData - save five days server response as data object</li>
                <li>saveCurrentConditionsData - save current contidions data object</li>
                <li>setCityNameAction - save current city name</li>
                <li>setCityKeyAction - save current city key</li>
                <li>setMeasureType - set current measure type: celsius - true, farenheit - false</li>
                <li>setMeasureTypeAndFetch - resive boolean measure type and triggers</li>
                 <ul>
                    <li>setMeasureType</li>
                    <li>fetchWeatherDataAction</li>
                </ul>
                <li>setCityKeyTriggerRefetchAction - resive city key and triggers</li>
                <ul>
                    <li>setCityKeyAction</li>
                    <li>fetchWeatherDataAction</li>
                    <li>fetchCurrentConditionsData</li>
                </ul>
                <li>setCityInfoAction - resive search results and triggers</li>
                <ul>
                    <li>setCityNameAction</li>
                    <li>setCityKeyTriggerRefetchAction</li>
                </ul>
                <li>fetchWeatherDataAction - triggers</li>
                <ul>
                    <li>fetchFiveDaysWeather - fetching five days weather data from server</li>
                    <li>saveWeatherData - save fetched data to weather data object</li>
                    <li>addNewError - if fetching data error occur</li>
                </ul>
                <li>fetchCurrentConditionsData - triggers</li>
                <ul>
                    <li>fetchCurrentConditionsDataApiCall - fetching current conditions data from server</li>
                    <li>saveCurrentConditionsData</li>
                    <li>addNewError - if fetching data error occur</li>
                </ul>
            </ul>
        </ul>
        <li>reducers - pretty straightforward so i will not expand on this</li>
    <ul>
        <li>errorsReducer</li>
        <ul>
            <li>error</li>
            <li>showErrorModal</li>
            <li>haveError</li>
        </ul>
        <li>favoriteReducer</li>
        <ul>
            <li>favorite - favorites array</li>
            <li>favoriteItem</li>
        </ul>
        <li>themeReducer</li>
        <ul>
            <li>dark - boolean: true if dark mode otherwise false</li>
        </ul>
        <li>weatherDataReducer</li>
        <ul>
            <li>cityKey</li>
            <li>cityName</li>
            <li>measureType - boolean: true - celsius, false - farenheit</li>
            <li>currentConditionsData</li>
            <li>weatherData</li>
        </ul>
    </ul>
    </ul>
    <li>Components</li>
        <ul>
            <li>Components</li>
            <ul>
                <li>errorsComponents</li>
                 <ul>
                    <li>ErrorFetchingData - modal show on errors</li>
                     <li>NotFoundPage - 404 page</li>
                </ul>
                <li>favoritePage</li>
                 <ul>
                    <li>FavoritePage - favorite items page contains flex box holding favorite cards</li>
                    <li>FavoriteCard - single favorite card</li>
                </ul>
                 <li>hoc</li>
                 <ul>
                    <li>ThemedContainer - hoc component changes background and text color on theme changes</li>
                </ul>
                 <li>loadingWrapper</li>
                 <ul>
                    <li>WithLoading - resive wrapped component and array of promises functions, initialize loading animation and promises all that functions, after all functions fulfilled returns wrapped component </li>
                    <li>Loading - loading animation mentioned above, show error if occur during fetching data</li>
                </ul>
                <li>navBar</li>
                <ul>
                    <li>NavBar - navigation bar contains theme, temperature type togglers</li>
                </ul>
                 <li>weatherPage</li>
                <ul>
                    <li>WeatherPage - show full weather page</li>
                    <ul>
                        <li>AddToFavorite - buttone triggers add or remove favorite item</li>
                        <li>currentConditions - current weather conditios section (middle section)</li>
                        <li>searchForm - search form (upper section)</li>
                        <li>weatherGrid - grid of five days weather forecast</li>
                        <ul>
                            <li>WeatherGrid - grid of five days weather forecast container</li>
                            <li>currentConditions - single weather card of mentioned five days weather</li>
                        </ul>
                    </ul>
                </ul>
            </ul>
        </ul>
    <li>apiCallsFunctions - js file contains all api all function using axios</li>
</ul>
