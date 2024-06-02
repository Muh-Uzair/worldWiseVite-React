import styles from "../appLayout/Form.module.css";
import BackButton from "../general/BackButton";
import { useTakeLatLngParams } from "../../../hooks/useTakeLatLngParams";
import { R_GEO_CODE_URL } from "../../../api-related/apiRelated";
import { useContext, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CitiesContext } from "../../../ContextApp";

// "https://api.bigdatacloud.net/data/reverse-gseocode-client?latitude=0&longitude=0"

function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

export default function Form() {
  const [lat, lng] = useTakeLatLngParams();
  const [cityName, setCityName] = useState("");
  const [isLoadingCityData, setIsLoadingCityData] = useState(false);
  const [st_countryCode, st_setCountryCode] = useState("");
  const [visitDate, setVisitDate] = useState("");
  const [errorState, setErrorState] = useState({
    errorCheck: false,
    errorMsg: "",
  });
  const [cityNotes, setCityNotes] = useState("");
  let [cityDetailObj, setCityDetailObj] = useState({});
  const { uploadCityDetails, isLoading: isUploading } =
    useContext(CitiesContext);

  useEffect(() => {
    async function fetchCityData() {
      try {
        setIsLoadingCityData(true);
        const res = await fetch(
          `${R_GEO_CODE_URL}?latitude=${lat}&longitude=${lng}`
        );
        const data = await res.json();
        if (!data.city || !data.countryName || !data.continent)
          throw new Error(
            "❌ Click on either city or country not on the oceans"
          );
        // console.log(data);

        setCityName(data.city || data.locality || "");
        st_setCountryCode(convertToEmoji(data.countryCode));
        setVisitDate(`${new Date()}`);
        setErrorState((prevErrorState) => ({
          ...prevErrorState,
          errorCheck: false,
          errorMsg: ``,
        }));

        setCityDetailObj({
          cityName: data.city,
          country: data.countryName,
          emoji: data.countryCode,
          position: {
            lat,
            lng,
          },
        });
      } catch (error) {
        setErrorState((prevErrorState) => ({
          ...prevErrorState,
          errorCheck: true,
          errorMsg: `${error.message}`,
        }));
      } finally {
        setIsLoadingCityData(false);
      }
    }
    if (lat && lng) fetchCityData();
  }, [lat, lng]);

  useEffect(
    function () {
      setCityDetailObj((cityDetailObj) => ({
        ...cityDetailObj,
        date: visitDate,
        notes: cityNotes,
      }));
    },
    [visitDate, cityNotes]
  );

  function handleFormSubmit(e) {
    e.preventDefault();

    uploadCityDetails(cityDetailObj);
    setCityName("");
    setVisitDate("");
    setCityNotes("");
  }

  if (!lat && !lng)
    return <p className={styles.textErrorMsg}>😊Start by clicking on a city</p>;

  return (
    <div>
      {errorState.errorCheck && (
        <p className={styles.textErrorMsg}>{errorState.errorMsg}</p>
      )}
      {!errorState.errorCheck && (
        <form className={styles.divForm} onSubmit={(e) => handleFormSubmit(e)}>
          {(isLoadingCityData || isUploading) && (
            <p className={styles.textLoading}>LOADING...</p>
          )}
          {!isLoadingCityData && !isUploading && (
            <>
              <div>
                <p className={styles.textCityName}>City name</p>
                <div className={styles.divCityCountryFlag}>
                  <input
                    type="text"
                    value={cityName}
                    onChange={(e) => setCityName(e.target.value)}
                    className={styles.inputCityName}
                  />

                  <span className={styles.countryFlag}>{st_countryCode}</span>
                </div>
              </div>

              <div>
                <p className={styles.textCityName}>
                  When did you go to {cityName}?
                </p>

                <DatePicker
                  className={styles.datePicker}
                  onChange={(visitDate) => setVisitDate(visitDate)}
                  selected={visitDate}
                  dateFormat={`dd/MM/yyyy`}
                />
              </div>

              <div>
                <p className={styles.textCityName}>
                  Your notes about trip to {cityName}
                </p>
                <textarea
                  className={styles.textAreaCityNotes}
                  onChange={(e) => setCityNotes(e.target.value)}
                  value={cityNotes}
                ></textarea>
              </div>

              <div className={styles.divAddBackButtons}>
                <button type="submit" className={styles.buttonAdd}>
                  ADD
                </button>
                <BackButton />
              </div>
            </>
          )}
        </form>
      )}
    </div>
  );
}
