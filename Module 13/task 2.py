from flask import Flask, jsonify, abort

app = Flask(__name__)
airport_db = {
    "EFHK": {"Name": "Helsinki-Vantaa Airport", "Location": "Helsinki"},
    "KJFK": {"Name": "John F. Kennedy International Airport", "Location": "New York"},
    "EGLL": {"Name": "London Heathrow Airport", "Location": "London"},
    "KLAX": {"Name": "Los Angeles International Airport", "Location": "Los Angeles"},
}
@app.route('/airport/<string:icao>', methods=['GET'])
def get_airport_info(icao):
    icao = icao.upper()  # Ensure ICAO code is uppercase
    airport_info = airport_db.get(icao)

    if not airport_info:
        abort(404, description="Airport not found")

    response = {
        "ICAO": icao,
        "Name": airport_info["Name"],
        "Location": airport_info["Location"]
    }
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)
