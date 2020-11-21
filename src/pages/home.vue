<script>
    import FullCalendar from '@fullcalendar/vue'
    import dayGridPlugin from '@fullcalendar/daygrid'
    import timeGridPlugin from '@fullcalendar/timegrid'
    import interactionPlugin from '@fullcalendar/interaction'
    import {INITIAL_EVENTS, createEventId} from '../JS/event-utils'

    export default {
        name: 'appHome',
        components: {
            FullCalendar // make the <FullCalendar> tag available
        },
        data() {
            return {
                calendarOptions: {
                    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
                    headerToolbar: {
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,timeGridWeek,timeGridDay'
                    },
                    initialView: 'dayGridMonth',
                    initialEvents: INITIAL_EVENTS,
                    editable: true,
                    selectable: true,
                    selectMirror: true,
                    dayMaxEvents: true,
                    weekends: true,
                    eventClick: this.handleEventClick,
                    eventsSet: this.handleEvents,
                    dateClick: this.handleDateClick,
                },
                currentEvents: []
            }
        },
        methods: {
            handleDateClick: function (selectInfo) {
                let title = prompt('please enter a new event')
                let calendarApi = selectInfo.view.calendar

                calendarApi.unselect() // clear date selection

                if (title) {
                    calendarApi.addEvent({
                        id: createEventId(),
                        title: title,
                        start: selectInfo.dateStr,
                        end: selectInfo.endStr,
                        allDay: selectInfo.allDay
                    })
                }
            },
            handleEventClick(clickInfo) {
                if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
                    clickInfo.event.remove()
                }
            },
            handleEvents(events) {
                this.currentEvents = events
            }
        }
    }
</script>
<template>
    <FullCalendar :options="calendarOptions">
        <template v-slot:eventContent='arg'>
            <b>{{ arg.timeText}} </b>
            <i>{{ arg.event.title}}</i>
        </template>
    </FullCalendar>
</template>
