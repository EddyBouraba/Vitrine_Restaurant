import { useState } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { Calendar, Clock, Users, CheckCircle2, AlertCircle } from 'lucide-react';

const Reservation = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);
  const [selectedTable, setSelectedTable] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const tables = [
    { id: 1, name: 'Table 1', seats: 2, position: 'Fenêtre', available: true },
    { id: 2, name: 'Table 2', seats: 2, position: 'Fenêtre', available: true },
    { id: 3, name: 'Table 3', seats: 4, position: 'Centre', available: true },
    { id: 4, name: 'Table 4', seats: 4, position: 'Centre', available: false },
    { id: 5, name: 'Table 5', seats: 6, position: 'Terrasse', available: true },
    { id: 6, name: 'Table 6', seats: 8, position: 'Salon Privé', available: true },
  ];

  const timeSlots = [
    '12:00', '12:30', '13:00', '13:30',
    '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '2',
        message: '',
      });
      setSelectedTable(null);
    }, 5000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="reservation" className="py-24 bg-gradient-to-b from-white via-primary-50/30 to-white dark:from-dark-950 dark:via-dark-900 dark:to-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
            <Calendar className="text-primary-500" size={16} />
            <span className="text-sm font-medium text-dark-700 dark:text-dark-300">
              Réservation
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-display font-bold text-dark-900 dark:text-white mb-6">
            Réservez
            <span className="block text-gradient">Votre Table</span>
          </h2>
          <p className="text-lg text-dark-600 dark:text-dark-400">
            Une expérience gastronomique vous attend. Réservez dès maintenant.
          </p>
        </div>

        {submitted ? (
          <div className="max-w-2xl mx-auto glass rounded-3xl p-12 text-center animate-scale-in">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="text-white" size={40} />
            </div>
            <h3 className="text-3xl font-display font-bold text-dark-900 dark:text-white mb-4">
              Réservation Confirmée !
            </h3>
            <p className="text-lg text-dark-600 dark:text-dark-400 mb-6">
              Merci {formData.name} ! Nous avons bien reçu votre réservation pour {formData.guests} personne(s) le {formData.date} à {formData.time}.
            </p>
            <p className="text-dark-600 dark:text-dark-400">
              Un email de confirmation vous a été envoyé à <strong>{formData.email}</strong>
            </p>
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Visual Table Selection */}
            <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="glass rounded-3xl p-8 h-full">
                <h3 className="text-2xl font-display font-bold text-dark-900 dark:text-white mb-6 flex items-center gap-2">
                  <Users className="text-primary-500" size={24} />
                  Choisissez votre table
                </h3>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {tables.map((table) => (
                    <button
                      key={table.id}
                      onClick={() => table.available && setSelectedTable(table)}
                      disabled={!table.available}
                      className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
                        selectedTable?.id === table.id
                          ? 'border-primary-500 bg-primary-50 dark:bg-primary-950/30 scale-105'
                          : table.available
                          ? 'border-dark-200 dark:border-dark-700 hover:border-primary-400 dark:hover:border-primary-600 bg-white dark:bg-dark-900'
                          : 'border-dark-200 dark:border-dark-700 bg-dark-100 dark:bg-dark-800 opacity-50 cursor-not-allowed'
                      }`}
                    >
                      <div className="text-left">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-display font-semibold text-dark-900 dark:text-white">
                            {table.name}
                          </span>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            table.available
                              ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                              : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                          }`}>
                            {table.available ? 'Disponible' : 'Réservée'}
                          </span>
                        </div>
                        <p className="text-sm text-dark-600 dark:text-dark-400">
                          {table.seats} personnes · {table.position}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>

                {selectedTable && (
                  <div className="p-4 bg-primary-50 dark:bg-primary-950/20 border border-primary-200 dark:border-primary-800 rounded-xl animate-slide-down">
                    <p className="text-sm text-dark-700 dark:text-dark-300">
                      <strong className="text-primary-600 dark:text-primary-400">
                        {selectedTable.name}
                      </strong>{' '}
                      sélectionnée · {selectedTable.seats} places · {selectedTable.position}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Reservation Form */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 h-full">
                <h3 className="text-2xl font-display font-bold text-dark-900 dark:text-white mb-6">
                  Vos Informations
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white dark:bg-dark-800 border border-dark-200 dark:border-dark-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-600 text-dark-900 dark:text-white transition-all"
                      placeholder="Jean Dupont"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white dark:bg-dark-800 border border-dark-200 dark:border-dark-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-600 text-dark-900 dark:text-white transition-all"
                        placeholder="jean@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                        Téléphone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white dark:bg-dark-800 border border-dark-200 dark:border-dark-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-600 text-dark-900 dark:text-white transition-all"
                        placeholder="+33 6 12 34 56 78"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2 flex items-center gap-2">
                        <Calendar size={16} />
                        Date *
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 bg-white dark:bg-dark-800 border border-dark-200 dark:border-dark-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-600 text-dark-900 dark:text-white transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2 flex items-center gap-2">
                        <Clock size={16} />
                        Heure *
                      </label>
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white dark:bg-dark-800 border border-dark-200 dark:border-dark-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-600 text-dark-900 dark:text-white transition-all"
                      >
                        <option value="">Choisir</option>
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2 flex items-center gap-2">
                      <Users size={16} />
                      Nombre de personnes *
                    </label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white dark:bg-dark-800 border border-dark-200 dark:border-dark-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-600 text-dark-900 dark:text-white transition-all"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'personne' : 'personnes'}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                      Message (optionnel)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="3"
                      className="w-full px-4 py-3 bg-white dark:bg-dark-800 border border-dark-200 dark:border-dark-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-600 text-dark-900 dark:text-white transition-all resize-none"
                      placeholder="Allergies, demandes spéciales..."
                    />
                  </div>

                  {!selectedTable && (
                    <div className="flex items-start gap-2 p-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl">
                      <AlertCircle className="text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" size={18} />
                      <p className="text-sm text-amber-800 dark:text-amber-300">
                        Veuillez sélectionner une table avant de valider
                      </p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={!selectedTable}
                    className={`w-full px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                      selectedTable
                        ? 'bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 text-white shadow-lg shadow-primary-500/50 hover:scale-105'
                        : 'bg-dark-200 dark:bg-dark-800 text-dark-400 dark:text-dark-600 cursor-not-allowed'
                    }`}
                  >
                    Confirmer la Réservation
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Reservation;
